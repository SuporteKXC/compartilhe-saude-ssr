import { TestBed } from '@angular/core/testing';

import { HtmlSanitizerService } from './html-sanitizer.service';

describe('HtmlSanitizerService', () => {
  let service: HtmlSanitizerService;

  const xssPayload = [
    `<script>alert('XSS1');</script>`,
    `<img src="invalid.jpg" onerror="alert('XSS2')">`,
    `<a href="#" onmouseover="alert('XSS3')">Passe o mouse aqui</a>`,
    `<div onmouseover="alert('XSS4')">Passe o mouse aqui</div>`,
    `<iframe src="javascript:alert('XSS5');"></iframe>`,
    `<input onfocus="alert('XSS6')" autofocus>`,
    `<button onclick="alert('XSS7')">Clique aqui</button>`,
    `<form action="javascript:alert('XSS8')"><input type="submit" value="Enviar"></form>`,
    `<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA" onload="alert('XSS9')">`,
    `<div style="width: expression(alert('XSS10'));"></div>`,
    `<!-- <img src="invalid.jpg" onerror="alert('XSS11')"> -->`,
    `<svg onload="alert('XSS12')"></svg>`,
    `<object data="javascript:alert('XSS13')"></object>`,
    `<meta http-equiv="refresh" content="0;url=javascript:alert('XSS14');">`,
    `<video onstart="alert('XSS15')" autoplay><source src="video.mp4" type="video/mp4"></video>`,
    `<textarea oninput="alert('XSS16')"></textarea>`,
    `<select onchange="alert('XSS17')"><option>Escolha uma opção</option></select>`,
    `<link rel="stylesheet" href="javascript:alert('XSS18');">`,
    `<audio onplay="alert('XSS19')" controls><source src="audio.mp3" type="audio/mp3"></audio>`,
    `<embed src="javascript:alert('XSS20');">`,
    '<img src=x onerror=alert(1)//>',
    '<svg><g/onload=alert(2)//<p>',
    '<p>abc<iframe//src=jAva&Tab;script:alert(3)>def</p>',
    '<math><mi//xlink:href="data:x,<script>alert(4)</script>">',
    '<TABLE><tr><td>HELLO</tr></TABL>',
    '<UL><li><A HREF=//google.com>click</UL>',
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HtmlSanitizerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it.each(xssPayload)("Deve sanitizar as tags corretamente",
    (xss) => {
      const result = service.sanitize(xss);
      expect(result).toMatch(/^(<([a-z][a-z\d]*)\b[^>]*>.*<\/\2>$|^$|^[^<>]+)$/i);
    }
  );
});
