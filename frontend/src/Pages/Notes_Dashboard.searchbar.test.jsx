import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import React from "react";
import Notes_Dashboard from "../Pages/Notes_Dashboard.jsx";

// 🧩 Mock localStorage and fetch
beforeEach(() => {
  localStorage.setItem("user", JSON.stringify({ token: "fake_token" }));

  global.fetch = vi.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve([
          { id: 1, title: "Shopping List", content: "Buy milk and bread" },
          { id: 2, title: "Work Notes", content: "Finish project report" },
          { id: 3, title: "Travel Plan", content: "Visit Japan this summer" },
        ]),
    })
  );
});

afterEach(() => {
  vi.clearAllMocks();
  localStorage.clear();
});

describe("🔍 Notes_Dashboard Search Bar", () => {
  test("filters notes based on search query", async () => {
    render(
      <MemoryRouter>
        <Notes_Dashboard />
      </MemoryRouter>
    );

    // Wait for notes to load
    await waitFor(() => {
      expect(screen.getByText(/Shopping List/i)).toBeInTheDocument();
    });

    const searchInput = screen.getByPlaceholderText(/Search notes.../i);

    // 🔎 Type 'work' into the search bar
    fireEvent.change(searchInput, { target: { value: "work" } });

    // Expect only 'Work Notes' to appear
    await waitFor(() => {
      expect(screen.getByText(/Work Notes/i)).toBeInTheDocument();
      expect(screen.queryByText(/Shopping List/i)).not.toBeInTheDocument();
      expect(screen.queryByText(/Travel Plan/i)).not.toBeInTheDocument();
    });

    // 🧹 Clear search input and verify all notes reappear
    fireEvent.change(searchInput, { target: { value: "" } });

    await waitFor(() => {
      expect(screen.getByText(/Shopping List/i)).toBeInTheDocument();
      expect(screen.getByText(/Work Notes/i)).toBeInTheDocument();
      expect(screen.getByText(/Travel Plan/i)).toBeInTheDocument();
    });
  });
});
