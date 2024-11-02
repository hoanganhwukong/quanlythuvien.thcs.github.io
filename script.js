document.getElementById('loginBtn').addEventListener('click', () => {
    window.location.href = 'login.html'; // Chuyển đến trang đăng nhập
});


// Trong trang đăng nhập
document.addEventListener('DOMContentLoaded', () => {
    const usernameField = document.getElementById('username');
    const passwordField = document.getElementById('password');
    const loginButton = document.getElementById('login');
    const createAccountButton = document.getElementById('createAccount');

    // Xử lý sự kiện khi người dùng nhấn nút đăng nhập
    if (loginButton) {
        loginButton.addEventListener('click', () => {
            const username = usernameField.value;
            const password = passwordField.value;

            // Kiểm tra thông tin đăng nhập
            if (username === 'admin' && password === '12345') {
                window.location.href = 'admin.html'; // Chuyển đến trang admin nếu đăng nhập thành công
            } else {
                alert('Tên đăng nhập hoặc mật khẩu không chính xác.');
            }
        });
    }

    // Xử lý sự kiện khi người dùng nhấn nút tạo tài khoản mới
    if (createAccountButton) {
        createAccountButton.addEventListener('click', () => {
            alert('Chức năng tạo tài khoản mới sẽ được triển khai sau.');
        });
    }
});
