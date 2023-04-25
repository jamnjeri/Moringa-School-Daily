import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


const ModeratorLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate ()

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);

    // Perform login request
    fetch('/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((response) => {
        setIsLoading(false);
        navigate("/sideNavbarMode")
        

        if (!response.ok) {
          setError('Invalid email or password.');
          return;
        }

        // Handle successful login
      })
      .catch(() => {
        setIsLoading(false);
        setError('Wrong email password combination');
      });
  };

  return (
    <section class="gradient-form h-full bg-neutral-200 dark:bg-neutral-700">
      <div class="container h-full p-10">
        <div
          class="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
          <div class="w-auto">
            <div
              class="block rounded-3xl"
              style={{
                background: 'linear-gradient(to top, #101F3C, white, white, white, white, white)'
              }}>
              <div class="g-0 lg:flex lg:flex-wrap">
                {/* <!-- Left column container--> */}
                <div >
                  <div class="md:mx-6 md:p-12">
                    {/* <!--Logo--> */}
                    <div class="text-center">
                      <img
                        class="mx-auto w-52"
                        src="https://moringaschool.com/wp-content/themes/moringa/public/images/logo.png"
                        alt="logo" />
                      <p class="mb-12 mt-1 pb-1 text-xl font-semibold">
                        Nurturing Africa’s Tech Talent
                      </p>
                    </div>

                    <form onSubmit={handleSubmit}>
                      <p class="mb-4">Please login to your account</p>
                      {/* <!--Username input--> */}
                      <br />
                      {error && <div className="error">{error}</div>}
                      <div class="relative mb-4" data-te-input-wrapper-init>
                        <input
                          type="email"
                          value={email}
                          onChange={handleEmailChange}
                          class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                          id="exampleFormControlInput1"
                          placeholder="E-mail"
                          required />
                        <label
                          for="exampleFormControlInput1"
                          class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                        >Email
                        </label>
                      </div>

                      {/* <!--Password input--> */}
                      <div class="relative mb-4" data-te-input-wrapper-init>
                        <input
                          type="password"
                          value={password}
                          onChange={handlePasswordChange}
                          class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                          id="exampleFormControlInput11"
                          placeholder="Password"
                          required />
                        <label
                          for="exampleFormControlInput11"
                          class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                        >Password
                        </label>
                      </div>

                      {/* <!--Submit button--> */}
                      <div class="mb-12 pb-1 pt-1 text-center">
                        <button
                         
                          class="mb-3 inline-block w-full rounded-full px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                          type="submit"
                          disabled={isLoading}
                          data-te-ripple-init
                          data-te-ripple-color="light"
                          style={{
                            background: ' #F9500D'
                          }}>
                          {isLoading ? 'Loading...' : 'Log In'}
                        </button>

                        
                      </div>

                      {/* <!--Register button--> */}
                      <div class="flex items-center justify-between pb-6">
                        <p class="mb-0 mr-2">Redirect to normal user</p>
                        <Link
                          to="/login"
                          type="button"
                          class="inline-block rounded-full border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal  text-white transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                          data-te-ripple-init
                          data-te-ripple-color="light"
                          style={{
                            background: ' #F9500D'
                          }}>
                            Login
                        </Link>
                      </div>
                    </form>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModeratorLogin;
