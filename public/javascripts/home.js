console.log(3);

async function Logout() {
  try {
      const res = await $.ajax({
        url: "/users/logout",
        type: "PUT",
      })
      if(res){
        document.cookie = "user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        window.location.href = '/login'
      }
  } catch (error) {
      console.log(error);
  }
}
