const getNewEntitiesAfterSetData = (stateEntities, entitiesFromAction) => {
  const newEntitiesMap = new Map(Object.entries(stateEntities));

  entitiesFromAction.forEach(entity => newEntitiesMap.set(`${entity.id}`, entity));

  return Array.from(newEntitiesMap.values())
    .reduce((acc, entity) => ({ ...acc, [entity.id]: entity }), {});
};

export default getNewEntitiesAfterSetData;
