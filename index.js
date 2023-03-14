// Code your solution in this file!

function distanceFromHqInBlocks(distance) {
    const hq = 42; 
    return Math.abs(distance - hq); 
  }
  

function distanceFromHqInFeet(distance) {
    const blockInFeet = 264; 
    const distanceInBlocks = Math.abs(distance - 42); 
    return distanceInBlocks * blockInFeet; 
  }
  

function distanceTravelledInFeet(start, end) {
    const blockInFeet = 264; 
    const distanceInBlocks = Math.abs(end - start); 
    return distanceInBlocks * blockInFeet; 
  }
  

  function calculatesFarePrice(start, destination) {
    const blockInFeet = 264; 
    const freeDistanceInFeet = 400; 
    const maxDistanceInFeet = 2500; 
  
    const distanceInFeet = distanceTravelledInFeet(start, destination); 
    if (distanceInFeet <= freeDistanceInFeet) {
      return 0;
    } else if (distanceInFeet > maxDistanceInFeet) {
      return 'cannot travel that far'; 
    } else if (distanceInFeet > freeDistanceInFeet && distanceInFeet <= 2000) {
     
      const distanceInFeetAfterFree = distanceInFeet - freeDistanceInFeet;
      return distanceInFeetAfterFree * 0.02; 
    } else if (distanceInFeet > 2000) {
      return 25; 
    }
  }
  