import * as fs from 'fs';
import * as xlsx from 'xlsx';

// Путь к Excel-файлу
const excelFilePath = './input/kis_item.xlsx';

// Чтение Excel-файла
const workbook = xlsx.readFile(excelFilePath);

// Выбираем первый лист (может быть, что и не первый, в зависимости от вашей структуры)
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];

// Преобразование данных в JSON
const jsonData = xlsx.utils.sheet_to_json(worksheet, { header: 'A' });

// Запись JSON-данных в файл
const jsonFilePath = 'output/output_item.json';
fs.writeFileSync(jsonFilePath, JSON.stringify(jsonData, null, 2));

console.log(
  'Excel-файл успешно сконвертирован в JSON формат и сохранен в output.json',
);
