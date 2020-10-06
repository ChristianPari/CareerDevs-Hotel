const startState = () => {
  const basis = [[{},{},{},{}]]
  const rooms = []

  basis.forEach(elm => {
    elm.forEach(item => {
      rooms.push([])
    })
  })

  for (let a = 0; a < basis[0].length; a++) {
    let floorRooms = []
    for (let b = 0; b < basis[0].length; b++) {
      let price = (50 * (a + 1)) + (10 * (b + 1) - 10) + 45

      floorRooms.push({
        room: `${a+1}0${b+1}`, 
        renter: null, 
        price: price
      })
    }
    rooms[a] = floorRooms
  }

  return rooms
}

module.exports = startState