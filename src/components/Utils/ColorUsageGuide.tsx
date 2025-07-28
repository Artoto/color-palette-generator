const ColorUsageGuide = () => {
  return (
    <div className="mt-8 p-6 bg-gray-50 rounded-xl">
      <h3 className="text-lg font-semibold mb-4 text-gray-800">
        คำแนะนำการใช้สี
      </h3>
      <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
        <div>
          <strong>Primary:</strong> ใช้สำหรับปุ่มหลัก, ลิงก์, และส่วนสำคัญ
        </div>
        <div>
          <strong>Secondary:</strong> ใช้สำหรับปุ่มรอง, การเน้น, และการ์ด
        </div>
        <div>
          <strong>Background:</strong> ใช้เป็นพื้นหลังหลักของเว็บไซต์
        </div>
        <div>
          <strong>Text:</strong> ใช้สำหรับข้อความหลักเพื่อความอ่านง่าย
        </div>
      </div>
    </div>
  );
};

export default ColorUsageGuide;
