$(document).ready(function(){
  function score_indicate(){
    let subject_points = [Number($('#national_language').val()),
                          Number($('#english').val()),
                          Number($('#mathematics').val()),
                          Number($('#science').val()),
                          Number($('#society').val())
                          ];

    let sum = subject_points[0];
    sum = sum + subject_points[1];
    sum = sum + subject_points[2];
    sum = sum + subject_points[3];
    sum = sum + subject_points[4];

    $("#sum_indicate").text(sum);

    let average = sum / subject_points.length;
    $("#average_indicate").text(average);

  };
  function get_achievement(){

    let averageIndicate = $("#average_indicate").text();
    console.log(averageIndicate)

    if ( averageIndicate >= 80){
      return "A";
    } else if ( averageIndicate >= 60) {
      return "B";

    } else if ( averageIndicate >= 40) {
      return "C";

    } else {
      return "D";
    }
  };

  function get_pass_or_failure(){
    let subject_points = [Number($('#national_language').val()),
                          Number($('#english').val()),
                          Number($('#mathematics').val()),
                          Number($('#science').val()),
                          Number($('#society').val())
                          ];

    let number = subject_points.length;

    let judge = "pass";

    for (let i=0; i<number; i++){
        if (subject_points[i]<60){
          judge = "failure" ;
           break ;
        }
    }
        return judge;
};
  function judgement(){
    let achievement = get_achievement();
    let pass_or_failure = get_pass_or_failure();

    $('#declaration').append(`<label id="alert-indicate" class="alert alert-info"> Your grade is ${achievement}. It is a ${pass_or_failure}</label>`);
};
  $('#national_language, #english, #mathematics, #science, #society').change(function() {
    score_indicate();
  });

  $('#btn-evaluation').click(function() {
    $("#evaluation").text(get_achievement());
  });

    $('#btn-judge').click(function() {
    $("#judge").text(get_pass_or_failure());
  });

  $('#btn-declaration').click(function() {
    $("#alert-indicate").remove();
    $("#declaration").text(judgement());
  });
});
// ここに書かれているjsの記述はあくまでヒントとして用意された雛形なので、書かれている記述に従わずに実装したいという場合は、自分の好きに実装して構わない。課題要件を満たし、コードの品質が一定の水準にあると判定されればどのような実装でも合格になる。
// 例ではJavaScriptとjQueryの両方の記述を使用しているが、どちらかに統一しても構いません。
