import { signupUser } from "../logic/index";

function SignUp({ goToPostSignUp, onSignIn }) {
  return (
    <>
      <h1 className="container container--vertical">Sign Up</h1>
      <form
        className="signup container container--vertical container--gapped"
        onSubmit={async (event) => {
          event.preventDefault();

          // const name = event.target.name.value
          // TODO recoger los valores del formulario

          const name = event.target.name.value;
          const username = event.target.username.value;
          const password = event.target.password.value;
          const email = event.target.email.value;
          const address = event.target.address.value;
          const phone = event.target.phone.value;
          const province = event.target.province.value;
          const location = event.target.location.value;
          const country = event.target.country.value;
          
          const user = {
              name, 
              username,
              password,
              email,
              address,
              phone,
              province,
              location,
              country
            }
            
            
            try {
                
                await signupUser(user); // pSAMOS UN OBJETO
                
                goToPostSignUp();

                alert("Agencia registrada");

            } catch ({ message }) {
                alert(message);
            }

            event.target.reset()
        }}>

        <input
          className="field"
          type="text"
          name="name"
          id="name"
          placeholder="nombre agencia"
        />
        <input
          className="field"
          type="text"
          name="username"
          id="username"
          placeholder="usuario"
        />
        <input
          className="field"
          type="password"
          name="password"
          id="password"
          placeholder="contraseña"
        />
        <input
          className="field"
          type="text"
          name="email"
          id="email"
          placeholder="correo electronico"
        />
        <input
          className="field"
          type="text"
          name="address"
          id="address"
          placeholder="direccion"
        />
        <input
          className="field"
          type="text"
          name="phone"
          id="phone"
          placeholder="telefono"
        />
        <input
          className="field"
          type="text"
          name="province"
          id="province"
          placeholder="provincia"
        />
        <input
          className="field"
          type="text"
          name="location"
          id="location"
          placeholder="ciudad"
        />
        <input
          className="field"
          type="text"
          name="country"
          id="country"
          placeholder="pais"
        />

        <div className="container">
          <button className="button button--medium" onClick={() => onSignIn()}>
            Sign in
          </button>
          <button className="button button--medium button--dark">
            Sign up
          </button>
        </div>
      </form>
    </>
  );
}

export default SignUp;
