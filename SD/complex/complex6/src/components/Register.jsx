function Register() {
    return (
        <div className="card">
            <h2>Student Registration</h2>
            <input type="text" placeholder="Student Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Register</button>
        </div>
    );
}

export default Register;