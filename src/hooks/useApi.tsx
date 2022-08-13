// const BASE_URL = 'http://localhost:4000/raffles/mainnet/';
const BASE_URL = "https://raffle-api.solpatrol.io/raffles/mainnet/";

export const FILE_URL = `https://raffle-api.solpatrol.io/uploads/`;

export default function useApi() {
  const get = async <T = any,>(endpoint: string): Promise<T> => {
    const response = await fetch(`${BASE_URL}${endpoint}`);
    return response.json();
  };

  const post = async <T = any,>(endpoint: string, body: any): Promise<T> => {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    return response.json();
  };

  const put = async <T = any,>(endpoint: string, body: any): Promise<T> => {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    return response.json();
  };

  const del = async <T = any,>(endpoint: string): Promise<T> => {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method: "DELETE",
    });
    return response.json();
  };

  return {
    get,
    post,
    put,
    del,
  };
}
