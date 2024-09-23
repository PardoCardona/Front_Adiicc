


//Se crea el GET 
async GET(resource, queryParams) {
    const token = localStorage.getItem("token");

    let bearer;
    if (token === "") {
      bearer = "";
    } else {
      bearer = `${token}`;
    }

    const data = {
      method: "GET",
      //body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": bearer,
      },
    };
    const url = `${back.api.baseURL}${resource}`;
    let response = await (await fetch(url, data)).json();
    return response;

  }
//Se crea el Delete
  async DELETE(resource, queryParams) {
    const token = localStorage.getItem("token");

    let bearer;
    if (token === "") {
      bearer = "";
    } else {
      bearer = `${token}`;
    }

    const data = {
      method: "DELETE",
      //body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": bearer,
      },
    };
    const url = `${back.api.baseURL}${resource}`;
    let response = await (await fetch(url, data)).json();
    return response;

  

  }
}
//Se crea el put
async PUT(resource, body) {

  const token = localStorage.getItem("token");

  let bearer;
  if (token === "") {
    bearer = "";
  } else {
    bearer = `${token}`;
  }

  const data = {
    method: "PUT",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
      "x-auth-token": bearer,
    },
  };
  const url = `${back.api.baseURL}${resource}`;
  let response = await (await fetch(url, data)).json();
  return response;
}
