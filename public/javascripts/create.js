console.log(2);

async function ADD() {
  try {
    const username = $("#username").val();
    const password = $("#password").val();
    console.log(name, password);
    const res = await $.ajax({
      url: "/users/create",
      type: "POST",
      data: {
        username: username,
        password: password,
      },
    });
    console.log(16,res);
    window.location.href = '/login'
  } catch (error) {
    alert(error.responseJSON.mess)
  }
}
