<!-- ������ �� ����� JavaScript --> 
<script type="text/javascript">
$(document).ready(function(){
  // �������������� ��������
  $(".start-slide").click(function(){
    $("#myCarousel2").carousel('cycle');
  });
  // ������������� ������� �������������� ����� ������� ��������
  $(".pause-slide").click(function(){
    $("#myCarousel2").carousel('pause');
  });
  // ������������ ������� �� ���������� �����
  $(".prev-slide").click(function(){
    $("#myCarousel2").carousel('prev');
  });
  // ������������ ������� �� ��������� �����
  $(".next-slide").click(function(){
    $("#myCarousel2").carousel('next');
  });
  // ������������ ������� �� 0 ����� �������� 
  $(".slide-one").click(function(){
    $("#myCarousel2").carousel(0);
  });
  // ������������ ������� �� 1 ����� �������� 
  $(".slide-two").click(function(){
    $("#myCarousel2").carousel(1);
  });
  // ������������ ������� �� 2 ����� �������� 
  $(".slide-three").click(function(){
    $("#myCarousel2").carousel(2);
  });
});

 

 
