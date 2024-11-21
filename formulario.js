const formulario = {
    html: `
        <div class="login-container">
            <h1>Iniciar Sesión</h1>
            <form id="loginForm">
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="username" placeholder="Usuario" required>
                    <label for="username">Usuario</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="password" class="form-control" id="password" placeholder="Contraseña" required>
                    <label for="password">Contraseña</label>
                </div>
                <button type="submit" class="btn btn-primary">Entrar</button>
            </form>
        </div>
    `,

    // Método para inyectar el formulario en el DOM
    render: function() {
        document.body.innerHTML = this.html;
    }
};

// Invocar el método para renderizar el formulario
formulario.render();
