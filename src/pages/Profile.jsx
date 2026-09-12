import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const Profile = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
    joined: "",
    profileImage: "",
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        // Check if user has Google profile photo
        const googlePhoto = firebaseUser.providerData.some(
          provider => provider.providerId === 'google.com' && provider.photoURL
        ) ? firebaseUser.photoURL + "?sz=200" // Higher resolution
          : "https://cdn-icons-png.flaticon.com/512/3135/3135715.png";

        setUser({
          name: firebaseUser.displayName || "User",
          email: firebaseUser.email || "",
          mobile: firebaseUser.phoneNumber || "",
          address: "",
          joined: firebaseUser.metadata.creationTime 
            ? new Date(firebaseUser.metadata.creationTime).toLocaleDateString('en-US', { 
                month: 'long', 
                year: 'numeric' 
              })
            : "Unknown",
          profileImage: googlePhoto
        });
      } else {
        navigate("/login");
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [auth, navigate]);

  if (loading) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
        <p>Loading your profile...</p>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>My Profile</h2>

      <div style={styles.profileCard}>
        <div style={{ textAlign: "center" }}>
          <img 
            src={user.profileImage} 
            alt="Profile" 
            style={styles.image}
            onError={(e) => {
              e.target.src = "https://cdn-icons-png.flaticon.com/512/3135/3135715.png";
            }}
          />
          {user.profileImage.includes('googleusercontent.com') && (
            <p style={{ fontSize: '12px', color: '#666', marginTop: '5px' }}>
              Google profile photo
            </p>
          )}
        </div>

        <div style={styles.details}>
          <div style={styles.row}><strong>Name:</strong> {user.name}</div>
          <div style={styles.row}><strong>Email:</strong> {user.email}</div>
          <div style={styles.row}><strong>Mobile:</strong> {user.mobile || "Not provided"}</div>
          <div style={styles.row}><strong>Address:</strong> {user.address || "Not provided"}</div>
          <div style={styles.row}><strong>Member Since:</strong> {user.joined}</div>

          <div style={styles.buttonGroup}>
            <button style={styles.button} onClick={() => alert("Edit Profile clicked")}>
              ✏️ Edit Profile
            </button>
            <button style={styles.button} onClick={() => alert("Change Password clicked")}>
              🔒 Change Password
            </button>
            <button 
              style={styles.logoutButton} 
              onClick={() => {
                auth.signOut();
                navigate("/");
              }}
            >
              🚪 Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Inline styles consume the global design tokens from index.css
const styles = {
  container: {
    padding: "var(--space-7) var(--space-5)",
    maxWidth: "800px",
    margin: "0 auto",
    fontFamily: "var(--font-family)",
    backgroundColor: "var(--color-background)",
    minHeight: "100vh",
  },
  heading: {
    textAlign: "center",
    color: "var(--color-text)",
    fontSize: "var(--text-subheading)",
    marginBottom: "var(--space-6)",
  },
  profileCard: {
    display: "flex",
    gap: "var(--space-6)",
    background: "var(--color-surface)",
    border: "1px solid var(--color-border)",
    boxShadow: "var(--shadow-md)",
    borderRadius: "var(--radius-lg)",
    padding: "var(--space-5)",
    alignItems: "flex-start",
    flexWrap: "wrap",
  },
  image: {
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "3px solid var(--color-accent)",
  },
  details: {
    flex: 1,
    fontSize: "var(--text-base)",
    lineHeight: "1.8",
    color: "var(--color-text)",
  },
  row: {
    marginBottom: "var(--space-3)",
  },
  buttonGroup: {
    marginTop: "var(--space-5)",
    display: "flex",
    flexWrap: "wrap",
    gap: "var(--space-3)",
  },
  button: {
    padding: "var(--space-3) var(--space-4)",
    background: "var(--color-accent)",
    color: "#fff",
    border: "none",
    borderRadius: "var(--radius-md)",
    cursor: "pointer",
    fontSize: "var(--text-caption)",
    fontWeight: 600,
  },
  logoutButton: {
    padding: "var(--space-3) var(--space-4)",
    background: "var(--color-error)",
    color: "#fff",
    border: "none",
    borderRadius: "var(--radius-md)",
    cursor: "pointer",
    fontSize: "var(--text-caption)",
    fontWeight: 600,
  },
};

export default Profile;