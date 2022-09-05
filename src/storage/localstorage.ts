function setItem(key: string, data: any): void {
  localStorage.setItem(key, JSON.stringify(data));
}

function getItem(key: string) {
  const res = localStorage.getItem(key);
  return res ? JSON.parse(res) : "";
}

export { setItem, getItem };
