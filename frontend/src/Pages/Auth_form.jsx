import { useState } from "react";

export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      console.log("Login:", formData);
      // TODO: call backend /auth/login
    } else {
      console.log("Signup:", formData);
      // TODO: call backend /auth/register
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="bg-blue-600 shadow-xl rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
          {isLogin ? "Login" : "Sign Up"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <div>
              <label className="block text-sm font-medium text-gray-600">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400"
                placeholder="Your name"
                required
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-600">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400"
              placeholder="Enter email"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400"
              placeholder="Enter password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-indigo-600 text-black font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          {isLogin ? (
            <>
              Don’t have an account?{" "}
              <button
                onClick={() => setIsLogin(false)}
                className="text-indigo-500 hover:underline"
              >
                Sign Up
              </button>
            </>
          ) : (
            <>
              Already a member?{" "}
              <button
                onClick={() => setIsLogin(true)}
                className="text-indigo-500 hover:underline"
              >
                Login
              </button>
            </>
          )}
        </p>
      </div>
    </div>
  );
}
