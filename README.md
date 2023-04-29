<h1>Formulario con base de datos 📝📊</h1>
<p>Este proyecto consiste en un formulario hecho en HTML y Bootstrap que al enviar los datos, los almacena en una base de datos PostgreSQL gracias a Node.js.</p>
<h1>Cómo probar el repositorio con PostgreSQL y Node.js en VSCode 🚀</h1>
<p>Este repositorio contiene un formulario web que utiliza una base de datos PostgreSQL para almacenar los datos ingresados. Si deseas probar el repositorio en tu propio entorno, sigue los siguientes pasos:</p>
<h2>Requisitos previos 📋</h2>
<ul>
  <li>Visual Studio Code instalado en tu equipo </li>
  <li>PostgreSQL instalado y en ejecución en tu equipo 🐘</li>
  <li>Node.js instalado en tu equipo </li>
</ul>
<h2>Instrucciones 📝</h2>
<ol>
  <li>Clona el repositorio en tu equipo usando Git:</li>
  <pre><code>git clone https://github.com/aniascua/formulario_conDatabase.git</code></pre>
  <li>Abre el proyecto en Visual Studio Code.</li>
  <li>Crea un archivo <code>.env</code> en la raíz del proyecto y agrega las siguientes variables de entorno necesarias:</li>
  <pre><code>DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_NAME=technews
DATABASE_USER=usuario
DATABASE_PASSWORD=contraseña</code></pre>
  <p>Reemplaza <code>usuario</code> y <code>contraseña</code> con tus propias credenciales de PostgreSQL.</p>
  <li>Crea una base de datos llamada <code>technews</code> en PostgreSQL usando la línea de comandos o la herramienta gráfica de tu elección.</li>
  <li>Crea una tabla llamada <code>nombre</code> en la base de datos <code>technews</code> con las columnas <code>nombre</code> y <code>mail</code>. Puedes usar la siguiente consulta SQL para crear la tabla:</li>
  <pre><code>CREATE TABLE nombre (
  nombre TEXT NOT NULL,
  mail TEXT NOT NULL
);</code></pre>
  <li>Abre una terminal en Visual Studio Code y ejecuta el siguiente comando para instalar las dependencias del proyecto:</li>
  <pre><code>npm install</code></pre>
  <li>Ejecuta el siguiente comando para iniciar el servidor:</li>
  <pre><code>npm start</code></pre>
  <li>Abre tu navegador y ve a la dirección <code>http://localhost:3000</code> para ver el formulario en acción. Ahora puedes enviar el formulario y ver los datos guardados en la base de datos <code>technews</code>.</li>
</ol>
<p>Listo! Ahora podés probar mi repositorio en tu entorno local con PostgreSQL y Node.js en Visual Studio Code 🎉</p>
