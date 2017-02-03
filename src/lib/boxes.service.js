
const baseUrl = 'http://localhost:8080/boxes';

export const loadBoxes = () => {
  return fetch(baseUrl)
    .then(res => res.json());
};

export const createBox = (box) => {
  return fetch(baseUrl, {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(box)
  }).then((res) => res.json());
};

export const saveBox = (box) => {
    return fetch(`${baseUrl}/${box.id}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(box)
    }).then((res) => res.json());
};

export const deleteBox = (id) => {
    return fetch(`${baseUrl}/${id}`, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });
};