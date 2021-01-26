import { diskStorage } from 'multer';
import * as path from 'path';

//! asyncForEach
export const asyncForEach = async (array: any[], callback: any) => {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
};

//! ConvertArrayToQuery
export const convertArrayToQueryString = async (array: any[]) => {
  if (array && array.length > 0) {
    let str = '';
    array.map((st: string, i) => {
      if (i == array.length - 1) {
        str = str + `'${st}'`;
        return;
      }
      str = str + `'${st}',`;
    });
    return str;
  } else {
    return `'4dac4ffb-c7d1-413c-be6e-7fbe9c2d6038'`;
  }
};

//! StorageImageOptions
export const storageImageOptions = diskStorage({
  destination: './uploads/images',
  filename: (req, file, callback) => {
    callback(null, generateFilename(file));
  },
});

//! CamelCaseToSeperateString
export const camelCaseToSeperateString = async (str: any) => {
  const result = str.replace(/([A-Z])/g, ' $1');
  const finalResult = result.charAt(0).toUpperCase() + result.slice(1);
  return finalResult;
};

//! ParseObjectToArray
export const parseObjectToArray = async (obj: any) => {
  const mappedData: any[] = [];

  Object.keys(obj).map(async o => {
    const payload = {
      name: await camelCaseToSeperateString(o),
      value: obj[o],
    };

    mappedData.push(payload);
  });

  return mappedData;
};

// //! SeperateStringToCamelCase
// export const seperateStringToCamelCase = async (str: any) => {
//   var text = 'helloThereMister';
// var result = text.replace( /([A-Z])/g, " $1" );
// var finalResult = result.charAt(0).toUpperCase() + result.slice(1);
// console.log(finalResult);
// };

//! FileTypeFilter
export const fileTypeFilter = (req, file, cb) => {
  if (
    file.mimetype !==
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
  ) {
    req.fileValidationError = 'goes wrong on the mimetype';
    return cb(null, false, new Error('goes wrong on the mimetype'));
  }
  cb(null, true);
};

//! StorageFileOptions
export const storageFileOptions = diskStorage({
  destination: './uploads/files',
  filename: (req, file, callback) => {
    callback(null, generateFilename(file));
  },
});

//! MulterOptions
export const multerOptions = {
  storage: storageFileOptions,
  fileFilter: fileTypeFilter,
  limits: { fileSize: 1 * 1000 * 1000 },
};

//! GenerateFilename
function generateFilename(file) {
  return `${Date.now()}${path.extname(file.originalname)}`;
}

//! ToNumber
export function toNumber(value: string): number {
  return parseInt(value, 10);
}

//! ToBool
export function toBool(value: string): boolean {
  return value === 'true';
}

export function isObjectEmpty(obj) {
  return Object.keys(obj).length === 0;
}

//! SecondsToTime
function secondsToTime(secs) {
  const hours = Math.floor(secs / (60 * 60));

  const divisorForMinutes = secs % (60 * 60);
  const minutes = Math.floor(divisorForMinutes / 60);

  const divisorForSeconds = divisorForMinutes % 60;
  const seconds = Math.ceil(divisorForSeconds);

  return `${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
}

//! GetTimeDifference
export function getTimeDifference(requestTime: Date, acceptTime: Date): any {
  const rDate = new Date(requestTime);
  const aDate = new Date(acceptTime);
  const seconds = (aDate.getTime() - rDate.getTime()) / 1000;

  return secondsToTime(seconds);
}

//! Token Extract
export function extractToken(headers: any) {
  let token: string =
    headers && headers.authorization ? headers.authorization : '';
  token = token.replace(/Bearer\s+/gm, '');
  return token;
}

export async function chunkJsonArray(array: any[], dataPerChunk: number) {
  return array.reduce((result, item, index) => {
    const chunkIndex = Math.floor(index / dataPerChunk);

    if (!result[chunkIndex]) {
      result[chunkIndex] = [];
    }

    result[chunkIndex].push(item);

    return result;
  }, []);
}

//! BD Number Validation
export const isNumberValid = (phoneNumber: any) => {
  try {
    const regex = /^\+?(88)?0?1[3-9][0-9]{8}\b$/g;
    let validNumber: any;
    const number = phoneNumber.match(regex);

    if (number) {
      number.map((number: any) => {
        validNumber = number.slice(number.length - 11, number.length);
      });
      return validNumber;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
};

export const extractPrefix = (phoneNumber: string) => {
  return phoneNumber.substring(0, 3);
};

export const bdNumberPrefixValidator = (prefix: any) => {
  try {
    const regex = /^01[3-9]$/g;
    const pf = prefix.match(regex);
    if (pf != null) {
      return prefix;
    } else {
      return 'Invalid Prefix';
    }
  } catch (error) {
    if (error) throw error;
  }
};

//? Sleep
export function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export function createUniqueArray(array, property) {
  const a = array.concat();
  for (let i = 0; i < a.length; ++i) {
    for (let j = i + 1; j < a.length; ++j) {
      if (a[i][property] === a[j][property]) {
        a.splice(j--, 1);
      }
    }
  }
  return a;
}
