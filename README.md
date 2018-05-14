# TinyMce-4.8---SuiteCrm
Update to Tiny Mce 4.8 in SuiteCrm


Atualização tinymce 4.8

1=> \modules\AOS_PDF_Templates\metadata\editviewdefs.php

linha 23:
'includes' =>
                array (
                    0 =>
                    array (
                        'file' => 'vendor/tinymce/tinymce/tinymce.js',
                    ),
                    1 =>
                    array (
                        'file' => 'modules/AOS_PDF_Templates/AOS_PDF_Templates.js',
                    ),
					
					2 =>
					array('file'=>'calltiny.js')
					
					
                ),

2 => inserir o calltiny.js na raiz:
Código:
function initTinyMce(tp){
	tinymce.init({ selector:tp, plugins: "advlist autolink lists link image charmap print preview anchor searchreplace visualblocks code fullscreen insertdatetime media table contextmenu paste directionality",toolbar: 'insertfile undo redo copy paste | styleselect bold italic bullist numlist outdent indent | alignleft aligncenter alignright | image  media anchor link | code fullscreen preview',
	height: 300 });
}

initTinyMce('textarea');
initTinyMce("input#description" );


3=> Pasta Vendor(raiz):
Conteudo do arquivo e pasta do tinymce.rar

4 => em include\SugarTinyMCE.php
linha 52/53
class SugarTinyMCE {
	var $jsroot = "vendor/tinymce/tinymce/";

linha 146:
		$path = getJSPath('/suitecrm/vendor/tinymce/tinymce/tinymce.js');
