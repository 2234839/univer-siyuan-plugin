const c = [
  "002,01,02,00003,032,1,0002,003,21,2,3,0000002,03,0003,001,0001,012,102",
  '{".":[{"а":[{"а":0}],"и":[{"н":0}],"о":[{"ё":0,"о":0}],"ө":[{"ө":0}],"у":[{"у":0}],"ү":[{"ү":0}],"э":[{"э":0}]}],"а":[{"а":[{"ж":0}],"д":[{"и":2},1],"й":[{"б":0}],"п":1,"с":[{"а":[{"а":3}]}],"т":1,"ф":1,"х":1,"ц":[{"д":4},1],"ч":1,"ш":1,"ю":1,"я":[{"а":[{"л":2}]}]}],"б":[{"а":[{"й":[{"д":[{"у":6}]}],"м":[{"и":7}]},5],"г":8,"и":5,"л":9,"р":8,"у":[{"ж":7}]}],"в":[{"а":5,"б":1,"г":8,"д":8,"е":[{"д":0},5],"ж":1,"з":1,"и":5,"л":8,"н":8,"о":5,"ө":5,"р":8,"с":1,"т":8,"у":5,"ү":5,"ц":1,"ш":8,"э":5,"я":5}],"г":[{"а":5,"б":1,"в":1,"г":8,"д":8,"ж":8,"и":5,"л":8,"м":8,"н":8,"о":[{"д":[{"и":0}]},5],"ө":5,"р":[{"а":[{"м":2}],"е":10},1],"с":9,"т":8,"у":[{"у":[{"л":[{"и":[{"у":11}]}]}]},5],"ү":5,"х":1,"ц":1,"ч":8,"ш":[{"и":12},8],"ы":5,"э":[{"н":[{"ү":0}]},5],"я":[{"л":13}]}],"д":[{"а":[{"в":[{"ы":14}]}],"б":1,"в":8,"г":8,"д":8,"е":[{"к":9}],"ж":8,"и":[{"а":15,"т":9}],"л":8,"м":8,"н":8,"р":8,"с":8,"т":8,"ү":[{"ү":[{".":10}]}],"х":8,"ц":8,"ч":8,"ъ":9,"ı":9}],"е":[{"б":1,"в":1,"г":16,"д":1,"з":1,"и":1,"л":1,"м":1,"о":14,"п":1,"р":[{"е":1}],"т":[{"р":[{"у":4}]}],"х":1,"ц":[{"и":15},1],"ш":1}],"ё":[{"д":1,"з":1,"о":[{"ч":0}],"х":0}],"ж":[{"а":5,"в":8,"г":8,"д":8,"ж":8,"и":[{"г":10,"н":10},5],"л":8,"м":8,"н":8,"ө":5,"р":8,"с":8,"т":8,"у":5,"ү":5,"ы":5,"э":5}],"з":[{"а":5,"в":8,"г":8,"д":8,"ж":8,"и":5,"л":8,"м":8,"н":8,"о":5,"ө":5,"р":8,"с":8,"т":8,"у":5,"ү":5,"х":1,"ц":1,"ч":1,"ш":8,"ы":5,"ı":9,"э":5}],"и":[{"г":[{"р":[{"а":0}]}],"д":[{"а":[{"л":12}],"ы":2},1],"ж":1,"з":1,"л":[{"д":[{"и":0}]}],"с":[{"п":7}],"т":1,"х":1,"ц":1,"ш":1}],"й":[{"б":1,"в":1,"г":[{"р":2},1],"д":1,"ж":1,"п":[{"л":2},1],"р":1,"с":1,"т":1,"х":1,"ц":1,"ч":1}],"к":[{"а":5,"е":5,"ж":1,"и":5,"к":1,"л":1,"н":1,"о":[{"о":14}],"с":[{"п":7}],"т":1,"у":5,"ц":8,"э":5}],"л":[{"а":5,"б":8,"в":1,"г":8,"д":8,"е":5,"ж":8,"з":8,"и":5,"л":[{"и":15},8],"м":8,"н":9,"о":[{"д":0},5],"ө":5,"р":8,"с":8,"т":8,"у":5,"ү":5,"х":8,"ц":8,"ч":9,"ш":9,"ъ":9,"ы":5,"ı":9,"э":5,"ю":1}],"м":[{"а":5,"б":1,"г":1,"д":1,"е":5,"и":[{"н":9},5],"к":16,"л":1,"н":1,"о":5,"ө":5,"п":8,"р":1,"у":5,"ү":5,"ф":1,"х":1,"ц":1,"ш":1,"ы":5,"э":5}],"н":[{"а":5,"б":1,"в":1,"г":[{"р":[{"е":0},2]},1],"д":1,"ё":[{"в":[{"р":[{"л":5}]}]}],"и":5,"к":1,"л":1,"м":1,"о":5,"ө":5,"п":1,"с":[{"д":4},1],"т":1,"у":5,"ү":5,"х":1,"ц":1,"ы":5,"э":5,"я":1}],"о":[{"а":1,"б":1,"г":[{"р":16}],"д":1,"е":1,"ж":1,"н":[{"е":1,"с":[{"т":7}],"т":7}],"п":[{"е":2},16],"с":[{"п":1}],"т":1,"ф":1,"х":1,"ц":1,"э":1}],"ө":[{"д":1,"ж":1,"р":[{"и":2}],"х":1,"ц":1,"ч":1}],"п":[{"д":8,"о":[{"с":7},14],"п":8,"р":[{"а":9,"о":2}],"т":8}],"р":[{"а":[{"б":9},5],"б":1,"в":1,"г":8,"д":8,"и":5,"л":8,"м":1,"н":8,"о":5,"ө":5,"п":1,"р":1,"с":8,"т":8,"у":[{"к":9},5],"ү":5,"х":8,"ц":1,"ч":9,"ш":8,"ы":5,"э":5}],"с":[{"а":5,"б":1,"в":8,"г":8,"д":8,"е":5,"ж":8,"з":1,"и":5,"к":[{"в":9},17],"л":8,"м":8,"н":8,"о":5,"ө":5,"п":[{"е":2,"и":2},1],"р":8,"с":8,"т":8,"у":5,"ү":5,"ф":1,"х":8,"ц":1,"ч":8,"ш":[{"т":4}],"ы":5,"э":5}],"т":[{"а":5,"б":8,"в":8,"г":8,"д":8,"ж":8,"з":8,"и":5,"л":8,"м":8,"н":8,"о":5,"ө":5,"р":[{"о":2,"у":5},8],"с":8,"т":8,"ү":5,"х":8,"ц":8,"ч":8,"ш":8,"ы":5,"э":5}],"у":[{"д":1,"ж":[{"и":2}],"з":1,"л":1,"т":1,"ф":1,"х":1,"ц":1,"ш":1}],"ү":[{"д":1,"з":[{"э":2},1],"л":1,"п":1,"с":[{"д":0}],"х":1,"ц":1,"ш":1}],"ф":[{"д":1,"м":1,"о":5}],"х":[{"а":[{"а":[{"д":[{"ы":6}]}],"ю":0},5],"б":8,"в":8,"г":8,"д":8,"ж":8,"з":8,"и":[{"д":[{"а":0}],"ı":9},5],"л":8,"м":8,"н":8,"о":5,"ө":5,"р":8,"с":8,"т":8,"у":[{"ж":7},5],"ү":5,"х":8,"ц":8,"ч":9,"ш":8,"ы":5,"ı":9,"э":5}],"ц":[{"а":5,"в":8,"г":8,"д":8,"ж":8,"л":8,"м":8,"н":8,"р":8,"с":8,"т":8,"х":8,"ч":8,"ъ":9}],"ч":[{"а":5,"в":1,"г":8,"д":8,"и":5,"л":8,"м":8,"н":8,"о":5,"р":8,"с":8,"т":8,"у":5,"ү":5,"х":8,"э":5}],"ш":[{"а":5,"б":1,"в":8,"г":8,"д":8,"ж":8,"и":5,"к":8,"л":8,"м":8,"н":8,"о":5,"ө":5,"р":8,"с":8,"т":8,"у":5,"ү":[{"ү":[{"л":[{"ı":13}]}]},5],"х":8,"ч":8,"э":5}],"ъ":[{"е":16,"ё":16,"я":16}],"ы":[{"г":1,"с":1,"х":1}],"ı":[{"б":1,"д":1,"к":1,"т":1,"х":1,"ц":1,"ч":1,"ш":1,"я":16}],"э":[{"д":1,"ж":1,"з":1,"н":[{"э":[{"х":[{"и":2}]}]}],"х":1,"ц":1}],"ю":[{"д":9}],"я":[{"а":5,"д":1,"н":[{"ш":[{"д":6}]}],"т":1,"х":1,"ш":1}]}',
  []
];
export {
  c as MnCyrlXLmc
};
//# sourceMappingURL=mn-cyrl-x-lmc-BGezHEbR-BVlv2lTY.js.map
