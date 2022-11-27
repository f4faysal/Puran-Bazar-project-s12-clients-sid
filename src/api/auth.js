export const setAuthToken = (user , accountType) => {
  const currentUser = {
    email: user.email,
    accountType
  };
  //sev user in db and grt token
  fetch(`http://localhost:5000/user/${user?.email}`, {
    method: "PUT",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(currentUser ),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      localStorage.setItem("access-token", data.token);
    });
  console.log("call", user);
};
