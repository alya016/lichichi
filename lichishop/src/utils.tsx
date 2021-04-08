export async function login(username: any, password: any, result: any[]) {
  
  
  return new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      if (result.find((res) => res.username == username && res.password == password)) {
        resolve();
      } else {
        reject();
      }
    }, 1000);
  });
}