const o = [
  "02,002,0002,1,2,21,12,,201,3,22,32,01,022",
  '{"0":[{"ⲙ":[{"̀":[{"0":7}]}],"ⲛ":[{"̀":[{"0":7}]}]}],".":[{"0":[{"ⲯ":1,"ⲑ":1,"ⲝ":1,"ⲫ":1,"ϩ":1,"ϫ":1,"ⲙ":[{"̀":2}],"ⲛ":[{"̀":2}],"ⲓ":[{"̈":2}],"ϯ":1}],"ⲃ":0,"ⲥ":0,"ⲇ":0,"ϥ":0,"ⲅ":0,"ϧ":0,"ⲕ":0,"ⲗ":0,"ⲙ":0,"ⲛ":0,"ⲡ":0,"ϭ":0,"ⲣ":0,"ⲧ":0,"ⲱ":[{"ⲟ":[{"ⲩ":0}]},0],"ⲭ":0,"ϣ":0,"ⲍ":0,"ⲏ":[{"ⲓ":0}]}],"ⲃ":[{"ⲃ":4,"ⲅ":4,"ⲇ":4,"ⲍ":4,"ϧ":4,"ⲕ":4,"ⲗ":0,"ⲙ":[{"̀":[{"0":6}]},4],"ⲛ":[{"̀":[{"0":6}]},4],"ⲭ":4,"ⲡ":4,"ⲣ":0,"ⲥ":4,"ⲧ":4,"ϥ":4,"ϭ":4,"ϣ":4,".":4,"ⲯ":[{"0":5}],"ⲑ":[{"0":5}],"ⲝ":[{"0":5}],"ⲫ":[{"0":5}],"ϩ":[{"0":5}],"ϫ":[{"0":5}],"ⳉ":[{"0":5}],"ϯ":[{"0":5}]},3],"ⲅ":[{"ⲃ":4,"ⲅ":4,"ⲇ":4,"ⲍ":4,"ϧ":4,"ⲕ":4,"ⲗ":0,"ⲙ":[{"̀":[{"0":6}]},4],"ⲛ":[{"̀":[{"0":6}]},4],"ⲭ":4,"ⲡ":4,"ⲣ":0,"ⲥ":4,"ⲧ":4,"ϥ":4,"ϭ":4,"ϣ":4,".":4,"ⲯ":[{"0":5}],"ⲑ":[{"0":5}],"ⲝ":[{"0":5}],"ⲫ":[{"0":5}],"ϩ":[{"0":5}],"ϫ":[{"0":5}],"ⳉ":[{"0":5}],"ϯ":[{"0":5}]},3],"ⲇ":[{"ⲃ":4,"ⲅ":4,"ⲇ":4,"ⲍ":4,"ϧ":0,"ⲕ":4,"ⲗ":4,"ⲙ":[{"̀":[{"0":6}]},4],"ⲛ":[{"̀":[{"0":6}]},4],"ⲭ":4,"ⲡ":4,"ⲣ":0,"ⲥ":4,"ⲧ":4,"ϥ":4,"ϭ":4,"ϣ":4,".":4,"ⲯ":[{"0":5}],"ⲑ":[{"0":5}],"ⲝ":[{"0":5}],"ⲫ":[{"0":5}],"ϩ":[{"0":5}],"ϫ":[{"0":5}],"ⳉ":[{"0":5}],"ϯ":[{"0":5}]},3],"ⲍ":[{"ⲃ":4,"ⲅ":4,"ⲇ":4,"ⲍ":4,"ϧ":4,"ⲕ":4,"ⲗ":4,"ⲙ":[{"̀":[{"0":6}]},4],"ⲛ":[{"̀":[{"0":6}]},4],"ⲭ":4,"ⲡ":4,"ⲣ":4,"ⲥ":4,"ⲧ":4,"ϥ":4,"ϭ":4,"ϣ":4,".":4,"ⲯ":[{"0":5}],"ⲑ":[{"0":5}],"ⲝ":[{"0":5}],"ⲫ":[{"0":5}],"ϩ":[{"0":5}],"ϫ":[{"0":5}],"ⳉ":[{"0":5}],"ϯ":[{"0":5}]},3],"ϧ":[{"ⲃ":4,"ⲅ":4,"ⲇ":4,"ⲍ":4,"ϧ":4,"ⲕ":4,"ⲗ":0,"ⲙ":[{"̀":[{"0":6}]},4],"ⲛ":[{"̀":[{"0":6}]},0],"ⲭ":4,"ⲡ":4,"ⲣ":4,"ⲥ":4,"ⲧ":4,"ϥ":4,"ϭ":4,"ϣ":4,".":4,"ⲯ":[{"0":5}],"ⲑ":[{"0":5}],"ⲝ":[{"0":5}],"ⲫ":[{"0":5}],"ϩ":[{"0":5}],"ϫ":[{"0":5}],"ⳉ":[{"0":5}],"ϯ":[{"0":5}]},3],"ⲕ":[{"ⲃ":4,"ⲅ":4,"ⲇ":4,"ⲍ":4,"ϧ":4,"ⲕ":4,"ⲗ":0,"ⲙ":[{"̀":[{"0":6}]},4],"ⲛ":[{"̀":[{"0":6}]},4],"ⲭ":4,"ⲡ":4,"ⲣ":0,"ⲥ":4,"ⲧ":0,"ϥ":4,"ϭ":4,"ϣ":4,".":4,"ⲯ":[{"0":5}],"ⲑ":[{"0":5}],"ⲝ":[{"0":5}],"ⲫ":[{"0":5}],"ϩ":[{"0":5}],"ϫ":[{"0":5}],"ⳉ":[{"0":5}],"ϯ":[{"0":5}]},3],"ⲗ":[{"ⲃ":4,"ⲅ":4,"ⲇ":4,"ⲍ":4,"ϧ":4,"ⲕ":4,"ⲗ":4,"ⲙ":[{"̀":[{"0":6}]},4],"ⲛ":[{"̀":[{"0":6}]},4],"ⲭ":4,"ⲡ":4,"ⲣ":4,"ⲥ":4,"ⲧ":4,"ϥ":4,"ϭ":4,"ϣ":4,".":4,"ⲯ":[{"0":5}],"ⲑ":[{"0":5}],"ⲝ":[{"0":5}],"ⲫ":[{"0":5}],"ϩ":[{"0":5}],"ϫ":[{"0":5}],"ⳉ":[{"0":5}],"ϯ":[{"0":5}]},3],"ⲙ":[{"ⲃ":4,"ⲅ":4,"ⲇ":4,"ⲍ":4,"ϧ":4,"ⲕ":4,"ⲗ":4,"ⲙ":[{"̀":[{"0":6}]},4],"ⲛ":[{"̀":[{"0":6}]},4],"ⲭ":4,"ⲡ":4,"ⲣ":4,"ⲥ":4,"ⲧ":4,"ϥ":4,"ϭ":4,"ϣ":4,".":4,"ⲯ":[{"0":5}],"ⲑ":[{"0":5}],"ⲝ":[{"0":5}],"ⲫ":[{"0":5}],"ϩ":[{"0":5}],"ϫ":[{"0":5}],"ⳉ":[{"0":5}],"ϯ":[{"0":5}],"̀":[{"0":[{".":4}],"ⲃ":8,"ⲅ":8,"ⲇ":8,"ϧ":8,"ⲕ":8,"ⲗ":8,"ⲙ":8,"ⲛ":8,"ⲭ":8,"ⲡ":8,"ⲣ":8,"ⲥ":8,"ⲧ":8,"ϥ":8,"ϭ":8,"ϣ":8}]},3],"ⲛ":[{"ⲃ":4,"ⲅ":4,"ⲇ":4,"ⲍ":4,"ϧ":4,"ⲕ":4,"ⲗ":4,"ⲙ":[{"̀":[{"0":6}]},4],"ⲛ":[{"̀":[{"0":6}]},4],"ⲭ":4,"ⲡ":4,"ⲣ":4,"ⲥ":4,"ⲧ":4,"ϥ":4,"ϭ":4,"ϣ":4,".":4,"ⲯ":[{"0":5}],"ⲑ":[{"0":5}],"ⲝ":[{"0":5}],"ⲫ":[{"0":5}],"ϩ":[{"0":5}],"ϫ":[{"0":5}],"ⳉ":[{"0":5}],"ϯ":[{"0":5}],"̀":[{"0":[{".":4}],"ⲃ":8,"ⲅ":8,"ⲇ":8,"ϧ":8,"ⲕ":8,"ⲗ":8,"ⲙ":8,"ⲛ":8,"ⲭ":8,"ⲡ":8,"ⲣ":8,"ⲥ":8,"ⲧ":8,"ϥ":8,"ϭ":8,"ϣ":8}]},3],"ⲭ":[{"ⲃ":4,"ⲅ":4,"ⲇ":4,"ⲍ":4,"ϧ":4,"ⲕ":4,"ⲗ":4,"ⲙ":[{"̀":[{"0":6}]},4],"ⲛ":[{"̀":[{"0":6}]},4],"ⲭ":4,"ⲡ":4,"ⲣ":4,"ⲥ":4,"ⲧ":4,"ϥ":4,"ϭ":4,"ϣ":4,".":4,"ⲯ":[{"0":5}],"ⲑ":[{"0":5}],"ⲝ":[{"0":5}],"ⲫ":[{"0":5}],"ϩ":[{"0":5}],"ϫ":[{"0":5}],"ⳉ":[{"0":5}],"ϯ":[{"0":5}]},3],"ⲡ":[{"ⲃ":4,"ⲅ":4,"ⲇ":4,"ⲍ":4,"ϧ":4,"ⲕ":4,"ⲗ":0,"ⲙ":[{"̀":[{"0":6}]},4],"ⲛ":[{"̀":[{"0":6}]},0],"ⲭ":4,"ⲡ":4,"ⲣ":0,"ⲥ":4,"ⲧ":0,"ϥ":4,"ϭ":4,"ϣ":4,".":4,"ⲯ":[{"0":5}],"ⲑ":[{"0":5}],"ⲝ":[{"0":5}],"ⲫ":[{"0":5}],"ϩ":[{"0":5}],"ϫ":[{"0":5}],"ⳉ":[{"0":5}],"ϯ":[{"0":5}]},3],"ⲣ":[{"ⲃ":4,"ⲅ":4,"ⲇ":4,"ⲍ":4,"ϧ":4,"ⲕ":4,"ⲗ":4,"ⲙ":[{"̀":[{"0":6}]},4],"ⲛ":[{"̀":[{"0":6}]},4],"ⲭ":4,"ⲡ":4,"ⲣ":4,"ⲥ":4,"ⲧ":4,"ϥ":4,"ϭ":4,"ϣ":4,".":4,"ⲯ":[{"0":5}],"ⲑ":[{"0":5}],"ⲝ":[{"0":5}],"ⲫ":[{"0":5}],"ϩ":[{"0":5}],"ϫ":[{"0":5}],"ⳉ":[{"0":5}],"ϯ":[{"0":5}]},3],"ⲥ":[{"ⲃ":0,"ⲅ":0,"ⲇ":0,"ⲍ":4,"ϧ":4,"ⲕ":0,"ⲗ":0,"ⲙ":[{"̀":[{"0":6}]},0],"ⲛ":[{"̀":[{"0":6}]},0],"ⲭ":4,"ⲡ":0,"ⲣ":0,"ⲥ":4,"ⲧ":0,"ϥ":0,"ϭ":4,"ϣ":4,".":4,"ⲯ":[{"0":5}],"ⲑ":[{"0":5}],"ⲝ":[{"0":5}],"ⲫ":[{"0":5}],"ϩ":[{"0":5}],"ϫ":[{"0":5}],"ⳉ":[{"0":5}],"ϯ":[{"0":5}]},3],"ⲧ":[{"ⲃ":4,"ⲅ":4,"ⲇ":4,"ⲍ":0,"ϧ":[{".":10},0],"ⲕ":4,"ⲗ":4,"ⲙ":[{"̀":[{"0":6}]},0],"ⲛ":[{"̀":[{"0":6}]},4],"ⲭ":4,"ⲡ":4,"ⲣ":0,"ⲥ":0,"ⲧ":4,"ϥ":4,"ϭ":4,"ϣ":4,".":4,"ⲯ":[{"0":5}],"ⲑ":[{"0":5}],"ⲝ":[{"0":5}],"ⲫ":[{"0":5}],"ϩ":[{"0":5}],"ϫ":[{"0":5}],"ⳉ":[{"0":5}],"ϯ":[{"0":5}]},3],"ϥ":[{"ⲃ":4,"ⲅ":4,"ⲇ":4,"ⲍ":4,"ϧ":4,"ⲕ":4,"ⲗ":0,"ⲙ":[{"̀":[{"0":6}]},4],"ⲛ":[{"̀":[{"0":6}]},4],"ⲭ":4,"ⲡ":4,"ⲣ":0,"ⲥ":4,"ⲧ":0,"ϥ":4,"ϭ":4,"ϣ":4,".":4,"ⲯ":[{"0":5}],"ⲑ":[{"0":5}],"ⲝ":[{"0":5}],"ⲫ":[{"0":5}],"ϩ":[{"0":5}],"ϫ":[{"0":5}],"ⳉ":[{"0":5}],"ϯ":[{"0":5}]},3],"ϭ":[{"ⲃ":4,"ⲅ":4,"ⲇ":4,"ⲍ":4,"ϧ":0,"ⲕ":4,"ⲗ":0,"ⲙ":[{"̀":[{"0":6}]},4],"ⲛ":[{"̀":[{"0":6}]},0],"ⲭ":4,"ⲡ":4,"ⲣ":0,"ⲥ":4,"ⲧ":0,"ϥ":4,"ϭ":4,"ϣ":4,".":4,"ⲯ":[{"0":5}],"ⲑ":[{"0":5}],"ⲝ":[{"0":5}],"ⲫ":[{"0":5}],"ϩ":[{"0":5}],"ϫ":[{"0":5}],"ⳉ":[{"0":5}],"ϯ":[{"0":5}]},3],"ϣ":[{"ⲃ":4,"ⲅ":4,"ⲇ":4,"ⲍ":4,"ϧ":4,"ⲕ":4,"ⲗ":4,"ⲙ":[{"̀":[{"0":6}]},4],"ⲛ":[{"̀":[{"0":6}]},4],"ⲭ":4,"ⲡ":4,"ⲣ":4,"ⲥ":4,"ⲧ":4,"ϥ":4,"ϭ":4,"ϣ":4,".":4,"ⲯ":[{"0":5}],"ⲑ":[{"0":5}],"ⲝ":[{"0":5}],"ⲫ":[{"0":5}],"ϩ":[{"0":5}],"ϫ":[{"0":5}],"ⳉ":[{"0":5}],"ϯ":[{"0":5}]},3],"ⲓ":[{"̈":[{"0":[{".":3},3]}]}],"ⲩ":[{"̈":[{"0":[{".":3},3]}]}],"ϩ":[{"0":[{".":4},9],"ⲣ":5}],"ⲫ":[{"0":[{".":4},3]}],"ⲝ":[{"0":[{".":4},3]}],"ⲑ":[{"0":[{".":4},3]}],"ⲯ":[{"0":[{".":4},3]}],"ϫ":[{"0":[{".":4},3]}],"ⲏ":[{"ϧ":[{"0":[{".":10},6]}],"ⳉ":[{"0":[{".":10},11]}],"ⲁ":12,"ⲉ":12,"ⲟ":[{"ⲩ":12},12],"ⲱ":12,"ⲓ":[{"ⲁ":12,"ⲉ":12,"ⲟ":12,"ⲱ":12}]}],"ⳉ":[{"0":[{".":4},9]}],"ϯ":[{"0":[{".":4},3]}],"ⲁ":[{"ⲉ":[{"ⲓ":13},12],"ⲟ":[{"ⲩ":0},12],"ⲏ":12,"ⲱ":12,"ⲓ":[{"ⲁ":12,"ⲉ":12,"ⲟ":12,"ⲱ":12}]}],"ⲉ":[{"ⲁ":12,"ⲟ":[{"ⲩ":0},12],"ⲏ":12,"ⲱ":12,"ⲓ":0}],"ⲟ":[{"ⲁ":12,"ⲉ":12,"ⲏ":12,"ⲱ":12,"ⲓ":[{"ⲁ":12,"ⲉ":12,"ⲟ":12,"ⲱ":12}],"ⲟ":[{"ⲩ":0}],"ⲩ":[{"ⲁ":1,"ⲉ":1,"ⲏ":1,"ⲟ":1,"ⲩ":1,"ⲱ":1,"ⲓ":1}]}],"ⲱ":[{"ⲟ":[{"ⲩ":12}]}]}',
  []
];
export {
  o as Cop
};
//# sourceMappingURL=cop-C8rmq-mf-Cg_9EzGl.js.map
