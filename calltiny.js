function initTinyMce(tp){
	tinymce.init({ selector:tp, plugins: "advlist autolink lists link image charmap print preview anchor searchreplace visualblocks code fullscreen insertdatetime media table contextmenu paste directionality",toolbar: 'insertfile undo redo copy paste | styleselect bold italic bullist numlist outdent indent | alignleft aligncenter alignright | image  media anchor link | code fullscreen preview',
	height: 300 });
}

initTinyMce('textarea');
initTinyMce("input#description" );
