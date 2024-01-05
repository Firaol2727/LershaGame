
export function generateCards() {
    const length = 60;
    const objectsWithGiftCount = 20;
    const result = [];
    const gifts=[
      "G1","","","G2","","","",
      "","","G3","","G4","","",
      "G5","","G6","G7","","G8","",
      "G9","","G10","","","G19","",
      "","","G14","","G15","","G16",
      "","G17","","G18","","","G20",
      "","","G11","","G12","","","G13",
      "","","","","","","","","",""
    ]
    for (let i = 0; i < length; i++) {
     // const hasGift = Math.random() < objectsWithGiftCount / length;
     const randomIndex=Math.floor(Math.random() * gifts.length);
      const gift =gifts[randomIndex] ;
      const obj = {
        no: i+1,
        has_gift: gift==""?false:true,
        is_selected: false,
        gift:gift
      };
      gifts.splice(randomIndex, 1);
      result.push(obj);
    }
  
    return result;
  }