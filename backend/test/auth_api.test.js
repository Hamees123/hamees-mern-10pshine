// test/auth_api.test.js
import request from "supertest";
import assert from "assert";
import app from "../server.js"; 
import User from "../models/User.js";

describe("Auth API", function () {
  let token;
  let testUser;

  // Clean up users before tests
  before(async function () {
    await User.destroy({ where: {} });
  });

  // ✅ REGISTER TEST
  it("should register a new user successfully", async function () {
    const res = await request(app)
      .post("/auth/register")
      .send({
        username: "testuser1",
        email: "testuser1@example.com",
        password: "password123",
      });

    assert.strictEqual(res.status, 201);
    assert.strictEqual(res.body.message, "User registered");
    assert.ok(res.body.user);
    assert.ok(res.body.user.id);
    assert.strictEqual(res.body.user.username, "testuser1");
    testUser = res.body.user;
  });

  // ❌ DUPLICATE REGISTER TEST
  it("should fail to register a user with existing email", async function () {
    const res = await request(app)
      .post("/auth/register")
      .send({
        username: "anotherUser",
        email: "testuser1@example.com",
        password: "password123",
      });

    // Depending on how your controller handles duplicates:
    assert.ok([400, 500].includes(res.status));
    assert.ok(res.body.error);
  });

  // ✅ LOGIN TEST
  it("should login successfully with correct credentials", async function () {
    const res = await request(app)
      .post("/auth/login")
      .send({
        email: "testuser1@example.com",
        password: "password123",
      });

    assert.strictEqual(res.status, 200);
    assert.strictEqual(res.body.message, "Login successful");
    assert.ok(res.body.token);
    assert.strictEqual(res.body.user.email, "testuser1@example.com");
    token = res.body.token;
  });

  // ❌ INVALID PASSWORD TEST
  it("should not login with incorrect password", async function () {
    const res = await request(app)
      .post("/auth/login")
      .send({
        email: "testuser1@example.com",
        password: "wrongpassword",
      });

    assert.strictEqual(res.status, 400);
    assert.strictEqual(res.body.error, "Invalid credentials");
  });

  // ❌ NON-EXISTENT USER TEST
  it("should not login a non-existent user", async function () {
    const res = await request(app)
      .post("/auth/login")
      .send({
        email: "nouser@example.com",
        password: "password123",
      });

    assert.strictEqual(res.status, 400);
    assert.strictEqual(res.body.error, "Invalid credentials");
  });

  // ✅ UPDATE USER TEST
  it("should update user details successfully", async function () {
    const res = await request(app)
      .put(`/auth/updateuser/${testUser.id}`)
      .set("Authorization", `Bearer ${token}`)
      .send({
        username: "updatedUser",
        email: "updateduser@example.com",
      });

    assert.strictEqual(res.status, 200);
    assert.strictEqual(res.body.username, "updatedUser");
    assert.strictEqual(res.body.email, "updateduser@example.com");
  });

  // ❌ UPDATE WITHOUT TOKEN TEST
  it("should not allow update without token", async function () {
  // Temporarily disable test mode
  const oldEnv = process.env.NODE_ENV;
  process.env.NODE_ENV = "dev";  // or anything not 'test'

  const res = await request(app)
    .put(`/auth/updateuser/${testUser.id}`)
    .send({
      username: "unauthorizedUser",
    });

  process.env.NODE_ENV = oldEnv; // restore env

    assert.ok([401, 403].includes(res.status));
  });
});
