// export enum ValidationType {
//   strict = 'strict',
//   tolerant = 'tolerant',
//   none = 'none'
// }

// let _noop = (sender: any, error: string) => {};

// export type ValidationErrorCallbackFunction = (sender: any, error: string) => void;

// export class InternalValidationSettings {
//   static type: ValidationType = ValidationType.tolerant;
//   static validationErrorCallback: ValidationErrorCallbackFunction = _noop;
// }

// export class ValidationSettings {
//   static set type(type: ValidationType) {
//     InternalValidationSettings.type = type;
//   }
  
//   static set validationErrorCallback(callback: ValidationErrorCallbackFunction) {
//     InternalValidationSettings.validationErrorCallback = callback;
//   }
// }