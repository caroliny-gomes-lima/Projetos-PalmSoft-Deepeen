import base64 from "./Base64";

function setItem(storageKey, value) {
  const key = base64.encode(storageKey);
  const jsonValue = JSON.stringify(value);
  const base64Value = base64.encode(jsonValue);
  localStorage.setItem(key, base64Value);
}

function getItem(storageKey) {
  const key = base64.encode(storageKey);
  const base64Value = localStorage.getItem(key);

  if (base64Value) {
    const value = JSON.parse(base64.decode(base64Value));
    return value;
  } else {
    return null;
  }
}

function removeItem(storageKey) {
  const key = base64.encode(storageKey);
  localStorage.removeItem(key);
}

function getAndRemoveItem(storageKey) {
  const value = getItem(storageKey);
  removeItem(storageKey);
  return value;
}

const customLocalStorage = { setItem, getItem, removeItem, getAndRemoveItem };

export default customLocalStorage;
