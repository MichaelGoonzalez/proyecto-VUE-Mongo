<template>
  <div class= "container">
      <section class="col-9 col-lg-4 mx-auto">
        <form action="formulario" method="POST">
              <div class="contenedor">
                  <h1>Iniciar sesión</h1>
                  <div class="element">
                      <div class="label"><label for="email">Correo</label></div>
                      <input id="email" type="text" name="email" placeholder="Escribe tu correo"><br/>
                  </div>
                  <div class="element">
                      <div class="label"><label for="password">Contraseña</label></div>
                      <input id="password" type="password" name="password" placeholder="Escribe tu Contraseña"><br/>
                  </div>
                  <br/>
                  <router-link to="/dashusers">
                  <input class="btn btn-primary" type="submit" value="Iniciar sesión"/>
                  </router-link>
              </div>
          </form>
          <!-- <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <b-form-group
                id="input-group-1"
                label="Email address:"
                label-for="input-1"
                description="We'll never share your email with anyone else."
            >
                <b-form-input
                id="input-1"
                v-model="form.email"
                type="email"
                placeholder="Enter email"
                required
                ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
                <b-form-input
                id="input-2"
                v-model="form.name"
                placeholder="Enter name"
                required
                ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-3" label="Food:" label-for="input-3">
                <b-form-select
                id="input-3"
                v-model="form.food"
                :options="foods"
                required
                ></b-form-select>
            </b-form-group>

            <b-form-group id="input-group-4" v-slot="{ ariaDescribedby }">
                <b-form-checkbox-group
                v-model="form.checked"
                id="checkboxes-4"
                :aria-describedby="ariaDescribedby"
                >
                <b-form-checkbox value="me">Check me out</b-form-checkbox>
                <b-form-checkbox value="that">Check that out</b-form-checkbox>
                </b-form-checkbox-group>
            </b-form-group>

            <b-button type="submit" variant="primary">Submit</b-button>
            <b-button type="reset" variant="danger">Reset</b-button>
        </b-form> -->
      </section>
  </div>
</template>


