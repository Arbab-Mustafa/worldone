export const HTTPCode = {
  SUCCESS: 200,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500
} as const;

export function RESPONSE(errorCode: number, message?: string, data?: unknown) {
  let dataToSend = {};
  switch (errorCode) {
    case HTTPCode.SUCCESS:
      if (data) dataToSend = { data };
      if (message) dataToSend = { ...dataToSend, message };
      break;
    case HTTPCode.BAD_REQUEST:
      dataToSend = { error: message ?? 'BAD_REQUEST' };
      break;
    case HTTPCode.UNAUTHORIZED:
      dataToSend = { error: message ?? 'UNAUTHORIZED' };
      break;
    case HTTPCode.FORBIDDEN:
      dataToSend = { error: message ?? 'FORBIDDEN' };
      break;
    case HTTPCode.NOT_FOUND:
      dataToSend = { error: message ?? 'NOT_FOUND' };
      break;
    case HTTPCode.INTERNAL_SERVER_ERROR:
      dataToSend = { error: message ?? 'INTERNAL_SERVER_ERROR' };
      break;
    default:
      dataToSend = { error: message ?? 'ERROR' };
      break;
  }
  const stringifiedData = JSON.stringify(dataToSend);
  return new Response(stringifiedData, { status: errorCode });
}
