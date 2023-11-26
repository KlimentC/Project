const buildOptions = (data) => {
  const options = {};
  if (data) {
    options.body = JSON.stringify(data);
    options.headers = {
      "content-type": "application/json",
    };
  }
  const token = localStorage.getItem("accessToken");

  if (token) {
    options.headers = {
      ...options.headers,
      "X-Authorization": token,
    };
  }

  return options;
};

export const request = async (method, url, data) => {
  const response = await fetch(url, {
    ...buildOptions(data),
    method,
  });

  if (response.status === 204) {
    return {};
  }

  const result = await response.json();

  if (!response.ok) {
    throw result;
  }

  return result;
};

// export const request = async (method, url, data) => {
//   const response = await fetch(url, {
//     ...buildOptions(data),
//     method,
//   });

//   if (!response.ok) {
//     throw new Error(`HTTP error! Status: ${response.status}`);
//   }

//   const contentType = response.headers.get("content-type");
//   if (contentType && contentType.includes("application/json")) {
//     const result = await response.json();
//     return result;
//   } else {
//     console.warn("Response is not in JSON format");
//     return null;
//   }
// };

export const get = request.bind(null, "GET");
export const post = request.bind(null, "POST");
export const put = request.bind(null, "PUT");
export const remove = request.bind(null, "DELETE");
export const patch = request.bind(null, "PATCH");
