import React,{ComponentProps} from "react"

export type GenericObject = {
    [key: string | number ]: string | boolean | number | object | Array<string | boolean | number> | null
}
