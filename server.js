// --- VULNERABILITY FOR TASK 5 ---
const adminConfig = {
    username: "admin_user",
    password: "SuperSecretPassword123!", // This hardcoded secret will be flagged
    databaseUrl: "mongodb+srv://admin:pass123@cluster0.mongodb.net/myhealthapp"
};

// Example usage which "leaks" the risk
console.log("Connecting to database with: " + adminConfig.password);
// --------------------------------
