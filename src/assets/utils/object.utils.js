export const deleteObject = ({ objectId, objects }) =>
  objects.filter((object) => object.id !== objectId)

export const addObject = ({ object, objects }) => {
  const objectsArr = [...objects]
  objectsArr.push(object)
  return objectsArr
}

export const editObject = ({ object, objects }) =>
  objects.map((objectObj) => (objectObj.id === object.id ? object : objectObj))
