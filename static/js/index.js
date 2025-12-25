$(document).ready(function() {
    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {
      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");
    });

    // --- Visualization Selector Logic ---
    var sceneList = [
        "3250_17.png",
        "3250_5.png",
        "3251_24.png",
        "3254_15.png",
        "3266_1.png",
        "3269_21.png",
        "3281_8.png",
        "3292_21.png",
        "3297_12.png"
    ];

    var basePaths = {
        "semray": "./static/images/semray/",
        "unlocs": "./static/images/unlocs/",
        "disamb": "./static/images/disamb/",
        "ours": "./static/images/ours/"
    };

    function updateComparison(filename) {
        $("#vis-semray").attr("src", basePaths["semray"] + filename);
        $("#vis-unlocs").attr("src", basePaths["unlocs"] + filename);
        $("#vis-disamb").attr("src", basePaths["disamb"] + filename);
        $("#vis-ours").attr("src", basePaths["ours"] + filename);
        
        // Highlight selected thumbnail
        $(".vis-thumb").removeClass("is-active-thumb");
        $(`.vis-thumb[data-file='${filename}']`).addClass("is-active-thumb");
    }

    // Initialize thumbnails
    var $thumbContainer = $("#vis-thumbnails");
    sceneList.forEach(function(filename, index) {
        var $col = $("<div>").addClass("column is-4-mobile is-3-tablet"); // Even larger: 3 per row on mobile, 4 per row on desktop
        var $img = $("<img>")
            .attr("src", "./static/images/imgs/" + filename)
            .addClass("vis-thumb image")
            .css("cursor", "pointer")
            .attr("data-file", filename)
            .click(function() {
                updateComparison(filename);
            });
        
        if (index === 0) $img.addClass("is-active-thumb"); // Select first by default
        
        $col.append($img);
        $thumbContainer.append($col);
    });

    // Initial load
    if (sceneList.length > 0) {
        updateComparison(sceneList[0]);
    }
    // ------------------------------------
})