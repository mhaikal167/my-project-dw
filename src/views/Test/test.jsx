import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [myData, setMyData] = useState('');

  // Mengambil data dari local storage saat komponen dimuat
  useEffect(() => {
    const storedData = localStorage.getItem('myData');
    if (storedData) {
      setMyData(storedData);
    }
  }, []);

  // Menyimpan data ke local storage saat nilai berubah
  useEffect(() => {
    localStorage.setItem('myData', myData);
  }, [myData]);

  const handleChange = (event) => {
    setMyData(event.target.value);
  };
  console.log(myData);

  return (
    <div>
      <input type="text" onChange={handleChange} />
      <p>Nilai: {myData}</p>
    </div>
  );
};

export default MyComponent;