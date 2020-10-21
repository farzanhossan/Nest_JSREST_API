import { Validator } from 'class-validator';
import { diskStorage } from 'multer';
import * as path from 'path';

export const asyncForEach = async (array: any[], callback: any) => {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
};

export const storageImageOptions = diskStorage({
  destination: './uploads/images',
  filename: (req, file, callback) => {
    callback(null, generateFilename(file));
  },
});

export const fileTypeFilter = (req, file, cb) => {
  console.log(file);
  if (file.mimetype !== 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
    req.fileValidationError = 'goes wrong on the mimetype';
    return cb(null, false, new Error('goes wrong on the mimetype'));
   }
   cb(null, true);
};

export const storageFileOptions = diskStorage({
  destination: './uploads/files',
  filename: (req, file, callback) => {
    callback(null, generateFilename(file));
  },
});

export const multerOptions = {
  storage: storageFileOptions,
  fileFilter: fileTypeFilter,
  limits: {fileSize: 1 * 1000 * 1000},
};

function generateFilename(file) {
  return `${Date.now()}${path.extname(file.originalname)}`;
}

export function toNumber(value: string): number {
  return parseInt(value, 10);
}

export function toBool(value: string): boolean {
  return value === 'true';
}

function secondsToTime(secs) {
  const hours = Math.floor(secs / (60 * 60));

  const divisorForMinutes = secs % (60 * 60);
  const minutes = Math.floor(divisorForMinutes / 60);

  const divisorForSeconds = divisorForMinutes % 60;
  const seconds = Math.ceil(divisorForSeconds);

  return `${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
}

export function getTimeDifference(requestTime: Date, acceptTime: Date): any {
  const rDate = new Date(requestTime);
  const aDate = new Date(acceptTime);
  const seconds = (aDate.getTime() - rDate.getTime()) / 1000;

  return secondsToTime(seconds);
}

export function getPreloadedScheduleMessages(
  customerName: string,
  customerPhoneNumber: string,
  appointmentId: string,
  appointmentDateTime: string,
  doctor: any
): any {
  return [
    `Hi, ${customerName}`,
    `Your appointment number is ${appointmentId}`,
    `Your video consultation is scheduled for ${appointmentDateTime} with Dr. ${doctor.data.name}`,
    `You will be notified 10 mins prior to the scheduled time through SMS to ${customerPhoneNumber}`,
    `Can you please tell me about your problem?`,
  ];
}