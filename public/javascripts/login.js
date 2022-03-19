console.log(2);

async function Login() {
  try {
    const username = $("#username").val();
    const password = $("#password").val();
    console.log(username, password);
    const res = await $.ajax({
      url: "/users/login",
      type: "POST",
      data: {
        username: username,
        password: password,
      },
    });
    console.log(16, res);
    window.location.href = "/home";
  } catch (error) {
    alert(error.responseJSON.mess);
  }
}
