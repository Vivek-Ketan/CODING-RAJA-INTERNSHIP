// Function to preview the resume
function previewResume() {
  // Get user input values
  var name = document.getElementById("name").value;
  var contact = document.getElementById("contact").value;
  var address = document.getElementById("address").value;
  var email = document.getElementById("email").value;
  var objective = document.getElementById("objective").value;
  var qualifications = document.getElementById("qualifications").value;
  var experience = document.getElementById("experience").value;
  var hobby = document.getElementById("hobby").value;
  var skills = document.getElementById("skills").value;

  // Get selected template
  var selectedTemplate = document.getElementById("template").value;

  // Open a new window for the resume preview
  var resumeWindow = window.open("", "_blank");

  // Display resume based on the selected template
  resumeWindow.document.write(`
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Resume Preview</title>
        <link rel="stylesheet" href="styles.css">
        <style>
          body { overflow-y: scroll; } /* Allow vertical scrolling */
          .preview-container { max-height: 80vh; overflow-y: auto; } /* Set max height and enable scrolling for the container */
          .preview-column { margin: 0 10px; background-color: #fff; padding: 20px; border-radius: 10px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); }
          .preview-column h2 { color: #3498db; font-size: 28px; }
          .preview-column p { margin-bottom: 15px; }
          .preview-column strong { font-weight: bold; color: #333; }
          #preview-container { display: flex; justify-content: space-around; align-items: center; background-color: #f4f4f4; padding: 20px; box-sizing: border-box; text-align: left; z-index: 1000; box-shadow: 0 0 20px rgba(0, 0, 0, 0.2); }
        </style>
      </head>
      <body>
        <div id="resumePreview" class="preview-container">
          ${getTemplateContent(selectedTemplate, name, contact, address, email, objective, qualifications, experience, hobby, skills)}
        </div>
      </body>
    </html>
  `);
}


// Function to get template content based on user input
function getTemplateContent(template, name, contact, address, email, objective, qualifications, experience, hobby, skills) {
  if (template === "template1") {
    // Template 1 HTML string
    return `
    <div class="preview-column" style="border: 2px solid #2980B9; padding: 20px; background-color: #ECF0F1; height: 100%;">
    <h1 style="font-size: 36px; font-weight: bold; color: #2980B9; margin-bottom: 10px;">${name}</h1>
    <p style="margin-bottom: 10px; font-size: 15px; color: #333;"><strong>Contact:</strong> ${contact}</p>
    <p style="margin-bottom: 10px; font-size: 15px; color: #333;"><strong>Email:</strong> ${email}</p>
    <p style="margin-bottom: 10px; font-size: 15px; color: #333;"><strong>Address:</strong> ${address}</p>
    <hr style="border: 1px solid #2980B9; margin: 20px 0;">
    <div style="text-align: left; margin-bottom: 15px;">
        <p style="font-size: 18px; color: #2980B9;"><strong>OBJECTIVE:</strong> ${objective}</p>
    </div>
    <br><br>
    <div style="text-align: left; margin-bottom: 15px;">
        <p style="font-size: 18px; color: #2980B9;"><strong>QUALIFICATIONS:</strong> ${qualifications}</p>
    </div>
    <br><br>
    <div style="text-align: left; margin-bottom: 15px;">
        <p style="font-size: 18px; color: #2980B9;"><strong>WORK EXPERIENCE:</strong> ${experience}</p>
    </div>
    <br><br>
    <div style="text-align: left; margin-bottom: 15px;">
        <p style="font-size: 18px; color: #2980B9;"><strong>SKILLS:</strong> ${skills}</p>
    </div>
    <br>
    <div style="text-align: left; margin-bottom: 15px;">
        <p style="font-size: 18px; color: #2980B9;"><strong>Hobby:</strong> ${hobby}</p>
    </div>
</div>


    `;
  } else if (template === "template2") {
    // Template 2 HTML string
    return `
      <div class="preview-column" style="background-color: #f8f8f8;">
        <div style="text-align: center;">
          <h1 style="font-size: 36px; font-weight: bold; margin-bottom: 20px;">${name}</h1>
          <p style="font-size: 15px; font-family: 'Arial', sans-serif; margin-bottom: 10px;"><strong>Contact:</strong> ${contact}</p>
          <p style="font-size: 15px; font-family: 'Arial', sans-serif; margin-bottom: 10px;"><strong>Email:</strong> ${email}</p>
          <p style="font-size: 15px; font-family: 'Arial', sans-serif; margin-bottom: 20px;"><strong>Address:</strong> ${address}</p>
        </div>
        <div style="margin-top: 20px; text-align: left;">
          <h2 style="margin-bottom: 10px;">Professional Information</h2>
          <p><strong>OBJECTIVE:&nbsp&nbsp&nbsp</strong> ${objective}</p>
          <br><br>
          <p><strong>QUALIFICATIONS:&nbsp&nbsp&nbsp</strong> ${qualifications}</p>
          <br><br>
          <p><strong>WORK EXPERIENCE:&nbsp&nbsp&nbsp</strong> ${experience}</p>
          <br><br>
          <p><strong>SKILLS:&nbsp&nbsp&nbsp</strong> ${skills}</p>
          <br><br>
          <p><strong>Hobby:&nbsp&nbsp&nbsp</strong> ${hobby}</p>
        </div>
      </div>
    `;
  }

  // Default template (can be adjusted)
  return `<div class="preview-column"><h2>Default Template</h2><!-- Display common information here --></div>`;
}

