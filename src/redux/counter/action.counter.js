import { createAction } from "@reduxjs/toolkit";

// export const minusAction = (payload = 1) => ({type: MINUS, payload})

export const minusAction = createAction('counter/minus') 
export const plusAction = createAction('counter/plus')

