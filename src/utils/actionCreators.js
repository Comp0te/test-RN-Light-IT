export default function createAction(type, payload) {
    return payload ? {type, payload} : {type};
}
