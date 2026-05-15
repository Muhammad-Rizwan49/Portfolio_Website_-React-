import "./AdminMessages.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AdminMessages() {
  const navigate = useNavigate();

  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMessages();
  }, []);

  const getToken = () => localStorage.getItem("token");

  const logoutUser = () => {
    localStorage.removeItem("token");
    navigate("/admin-login");
  };

  const fetchMessages = async () => {
    const token = getToken();

    if (!token) {
      logoutUser();
      return;
    }

    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/contact`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setMessages(res.data);
    } catch (error) {
      console.log(error);

      if (error.response?.status === 401) {
        logoutUser();
      }
    }

    setLoading(false);
  };

  const deleteMessage = async (id) => {
    const token = getToken();

    if (!token) {
      logoutUser();
      return;
    }

    try {
      await axios.delete(
        `${import.meta.env.VITE_API_URL}/contact/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setMessages(
        messages.filter((item) => item.id !== id)
      );

      alert("Message Deleted");
    } catch (error) {
      console.log(error);

      if (error.response?.status === 401) {
        logoutUser();
      } else {
        alert("Delete Failed");
      }
    }
  };

  return (
    <section className="admin-messages">
      <h1>Client Messages</h1>

      {loading ? (
        <p>Loading messages...</p>
      ) : (
        <div className="messages-grid">
          {messages.length === 0 ? (
            <p>No messages found.</p>
          ) : (
            messages.map((item) => (
              <div
                className="message-card"
                key={item.id}
              >
                <h3>{item.name}</h3>

                <p className="email">
                  {item.email}
                </p>

                <p className="message">
                  {item.message}
                </p>

                <button
                  className="delete-btn"
                  onClick={() =>
                    deleteMessage(item.id)
                  }
                >
                  Delete
                </button>
              </div>
            ))
          )}
        </div>
      )}
    </section>
  );
}

export default AdminMessages;