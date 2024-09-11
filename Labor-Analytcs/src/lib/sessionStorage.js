import base64 from "./Base64";

function setItem(storageKey, value) {
  const key = base64.encode(storageKey);
  const jsonValue = JSON.stringify(value);
  const base64Value = base64.encode(jsonValue);
  sessionStorage.setItem(key, base64Value);
}

function getItem(storageKey) {
  const key = base64.encode(storageKey);
  const base64Value = sessionStorage.getItem(key);

  if (base64Value) {
    const value = JSON.parse(base64.decode(base64Value));
    return value;
  } else {
    return null;
  }
}

function removeItem(storageKey) {
  const key = base64.encode(storageKey);
  sessionStorage.removeItem(key);
}

function getAndRemoveItem(storageKey) {
  const value = getItem(storageKey);
  removeItem(storageKey);
  return value;
}

const customSessionStorage = { setItem, getItem, removeItem, getAndRemoveItem };

export default customSessionStorage;
