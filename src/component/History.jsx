import React from 'react';

function History() {
  return (
    <div className="p-6 bg-gradient-to-r from-blue-200 to-purple-300 rounded-lg shadow-xl">
      <p className="text-3xl font-extrabold mb-6 text-center text-gray-800">ประวัติ</p>
      <div className="flex flex-col gap-10 md:flex-row md:gap-10 justify-center">
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
          <p className="text-base md:text-lg font-semibold text-gray-700">ชื่อ : นายณัฐพล หนูเป้า</p>
          <p className="text-base md:text-lg font-semibold text-gray-700">ชื่อเล่น : เบสท์</p>
          <p className="text-base md:text-lg font-semibold text-gray-700">อายุ : 22 ปี</p>
          <p className="text-base md:text-lg font-semibold text-gray-700">วันเกิด : 31 ธันวาคม 2544</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
          <p className="text-base md:text-lg font-semibold text-gray-700">NAME : Nattapon Nupao</p>
          <p className="text-base md:text-lg font-semibold text-gray-700">Nickname : Best</p>
          <p className="text-base md:text-lg font-semibold text-gray-700">Age : 22 years old</p>
          <p className="text-base md:text-lg font-semibold text-gray-700">Birthday : 31 December 2001</p>
        </div>
      </div>
    </div>
  );
}

export default History;
