import React, { useState, useEffect } from "react";

const AdminContact = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  // Fetch contact messages
  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/contact");
        const data = await res.json();
        setContacts(data);
        setLoading(false);
      } catch (err) {
        setError("Failed to load contacts");
        setLoading(false);
      }
    };
    fetchContacts();
  }, []);

  // Handle delete
  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/contact/${id}`, {
        method: "DELETE",
      });
      setContacts((prev) => prev.filter((c) => c._id !== id));
    } catch (err) {
      alert("Error deleting message");
    }
  };

  // Filter contacts
  const filteredContacts = contacts.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div id="#addcontact" className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 w-full max-w-4xl">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-white">
          Contact Messages
        </h2>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search by name or email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-2 mb-4 border rounded-lg dark:bg-gray-700 dark:text-white"
        />

        {loading && <p className="text-center">Loading...</p>}
        {error && <p className="text-red-500 text-center">{error}</p>}
        {!loading && filteredContacts.length === 0 && (
          <p className="text-center text-gray-600 dark:text-gray-300">
            No messages found
          </p>
        )}

        <ul className="space-y-4">
          {filteredContacts.map((c) => (
            <li
              key={c._id}
              className="border rounded-lg p-4 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white flex justify-between items-start"
            >
              <div>
                <p>
                  <strong>Name:</strong> {c.name}
                </p>
                <p>
                  <strong>Email:</strong> {c.email}
                </p>
                <p>
                  <strong>Message:</strong> {c.message}
                </p>
              </div>
              <button
                onClick={() => handleDelete(c._id)}
                className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminContact;
