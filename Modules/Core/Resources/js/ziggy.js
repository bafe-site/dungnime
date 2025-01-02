    var Ziggy = {
        namedRoutes: {
            "dashboard.index":{"uri":"backend","methods":["GET","HEAD"],"domain":null},
            "frontend.home":{"uri":"\/","methods":["GET","HEAD"],"domain":null},
            "frontend.genre":{"uri":"genre-list","methods":["GET","HEAD"],"domain":null},
            "frontend.genre-detail":{"uri":"genre\/{genre}","methods":["GET","HEAD"],"domain":null},
            "frontend.detail":{"uri":"{slug}\/detail","methods":["GET","HEAD"],"domain":null},
            "frontend.ongoing":{"uri":"ongoing","methods":["GET","HEAD"],"domain":null},
            "frontend.popular":{"uri":"popular","methods":["GET","HEAD"],"domain":null},
            "frontend.recent":{"uri":"recent","methods":["GET","HEAD"],"domain":null},
            "frontend.watch":{"uri":"watch\/{anime}\/{episode}","methods":["GET","HEAD"],"domain":null},
            "frontend.search":{"uri":"search","methods":["GET","HEAD"],"domain":null},
            "frontend.jadwal":{"uri":"jadwal","methods":["GET","HEAD"],"domain":null},
            "frontend.anime-list":{"uri":"anime-list","methods":["GET","HEAD"],"domain":null},
            "anime.table":{"uri":"konten\/anime\/table","methods":["GET","HEAD"],"domain":null},
            "anime.data":{"uri":"konten\/anime\/{anime}\/data","methods":["GET","HEAD"],"domain":null},
            "anime.store":{"uri":"konten\/anime","methods":["POST"],"domain":null},
            "anime.update":{"uri":"konten\/anime\/{anime}","methods":["PUT","PATCH"],"domain":null},
            "anime.destroy":{"uri":"konten\/anime\/{anime}","methods":["DELETE"],"domain":null},
            "episode.table":{"uri":"konten\/anime\/{anime}\/episode\/table","methods":["GET","HEAD"],"domain":null},
            "episode.data":{"uri":"konten\/episode\/{episode}\/data","methods":["GET","HEAD"],"domain":null},
            "anime.episode.store":{"uri":"konten\/anime\/{anime}\/episode","methods":["POST"],"domain":null},
            "episode.update":{"uri":"konten\/episode\/{episode}","methods":["PUT","PATCH"],"domain":null},
            "episode.destroy":{"uri":"konten\/episode\/{episode}","methods":["DELETE"],"domain":null},
            "anime.index":{"uri":"konten\/anime","methods":["GET","HEAD"],"domain":null},
            "anime.create":{"uri":"konten\/anime\/tambah","methods":["GET","HEAD"],"domain":null},
            "anime.show":{"uri":"konten\/anime\/{anime}","methods":["GET","HEAD"],"domain":null},
            "anime.edit":{"uri":"konten\/anime\/{anime}\/ubah","methods":["GET","HEAD"],"domain":null},
            "anime.episode.index":{"uri":"konten\/anime\/{anime}\/episode","methods":["GET","HEAD"],"domain":null},
            "anime.episode.create":{"uri":"konten\/anime\/{anime}\/episode\/tambah","methods":["GET","HEAD"],"domain":null},
            "episode.edit":{"uri":"konten\/episode\/{episode}\/ubah","methods":["GET","HEAD"],"domain":null},
            "api.grup-user.table":{"uri":"api\/backend\/grup-user\/table","methods":["GET","HEAD"],"domain":null},
            "api.grup-user.data":{"uri":"api\/backend\/grup-user\/{grup_user}\/data","methods":["GET","HEAD"],"domain":null},
            "api.grup-user.store":{"uri":"api\/backend\/grup-user","methods":["POST"],"domain":null},
            "api.grup-user.update":{"uri":"api\/backend\/grup-user\/{grup_user}","methods":["PUT","PATCH"],"domain":null},
            "api.grup-user.destroy":{"uri":"api\/backend\/grup-user\/{grup_user}","methods":["DELETE"],"domain":null},
            "api.user.table":{"uri":"api\/backend\/user\/table","methods":["GET","HEAD"],"domain":null},
            "api.user.data":{"uri":"api\/backend\/user\/{user}\/data","methods":["GET","HEAD"],"domain":null},
            "api.user.store":{"uri":"api\/backend\/user","methods":["POST"],"domain":null},
            "api.user.update":{"uri":"api\/backend\/user\/{user}","methods":["PUT","PATCH"],"domain":null},
            "api.user.destroy":{"uri":"api\/backend\/user\/{user}","methods":["DELETE"],"domain":null},
            "api.member.table":{"uri":"api\/backend\/member\/table","methods":["GET","HEAD"],"domain":null},
            "api.member.data":{"uri":"api\/backend\/member\/{member}\/data","methods":["GET","HEAD"],"domain":null},
            "api.member.store":{"uri":"api\/backend\/member","methods":["POST"],"domain":null},
            "api.member.update":{"uri":"api\/backend\/member\/{member}","methods":["PUT","PATCH"],"domain":null},
            "api.member.destroy":{"uri":"api\/backend\/member\/{member}","methods":["DELETE"],"domain":null},"grup-user.table":{"uri":"backend\/grup-user\/table","methods":["GET","HEAD"],"domain":null},"grup-user.data":{"uri":"backend\/grup-user\/{grup_user}\/data","methods":["GET","HEAD"],"domain":null},"grup-user.store":{"uri":"backend\/grup-user","methods":["POST"],"domain":null},"grup-user.update":{"uri":"backend\/grup-user\/{grup_user}","methods":["PUT","PATCH"],"domain":null},"grup-user.destroy":{"uri":"backend\/grup-user\/{grup_user}","methods":["DELETE"],"domain":null},"user.table":{"uri":"backend\/user\/table","methods":["GET","HEAD"],"domain":null},"user.data":{"uri":"backend\/user\/{user}\/data","methods":["GET","HEAD"],"domain":null},"user.store":{"uri":"backend\/user","methods":["POST"],"domain":null},"user.update":{"uri":"backend\/user\/{user}","methods":["PUT","PATCH"],"domain":null},"user.destroy":{"uri":"backend\/user\/{user}","methods":["DELETE"],"domain":null},"member.table":{"uri":"backend\/member\/table","methods":["GET","HEAD"],"domain":null},"member.data":{"uri":"backend\/member\/{member}\/data","methods":["GET","HEAD"],"domain":null},"member.store":{"uri":"backend\/member","methods":["POST"],"domain":null},"member.update":{"uri":"backend\/member\/{member}","methods":["PUT","PATCH"],"domain":null},"member.destroy":{"uri":"backend\/member\/{member}","methods":["DELETE"],"domain":null},"grup-user.index":{"uri":"kelola-user\/grup-user","methods":["GET","HEAD"],"domain":null},"grup-user.create":{"uri":"kelola-user\/grup-user\/tambah","methods":["GET","HEAD"],"domain":null},"grup-user.edit":{"uri":"kelola-user\/grup-user\/{grup_user}\/ubah","methods":["GET","HEAD"],"domain":null},"user.index":{"uri":"kelola-user\/user","methods":["GET","HEAD"],"domain":null},"user.create":{"uri":"kelola-user\/user\/tambah","methods":["GET","HEAD"],"domain":null},"user.edit":{"uri":"kelola-user\/user\/{user}\/ubah","methods":["GET","HEAD"],"domain":null},"member.index":{"uri":"kelola-user\/member","methods":["GET","HEAD"],"domain":null},"member.create":{"uri":"kelola-user\/member\/tambah","methods":["GET","HEAD"],"domain":null},"member.edit":{"uri":"kelola-user\/member\/{member}\/ubah","methods":["GET","HEAD"],"domain":null},
            "login":{"uri":"admin_area\/login","methods":["GET","HEAD"],"domain":null},
            "post-login":{"uri":"admin_area\/login","methods":["POST"],"domain":null},
            "logout":{"uri":"admin_area\/logout","methods":["GET","POST","HEAD"],"domain":null},
            "password.request":{"uri":"admin_area\/password\/request","methods":["GET","HEAD"],"domain":null},
            "password.email":{"uri":"admin_area\/password\/email","methods":["POST"],"domain":null},
            "password.update":{"uri":"admin_area\/password\/reset","methods":["POST"],"domain":null},
            "password.reset":{"uri":"admin_area\/password\/reset\/{token}","methods":["GET","HEAD"],"domain":null},
            "api.member.login.post":{"uri":"api\/v1\/web\/member\/login","methods":["POST"],"domain":null}},
        baseUrl: 'https://dungnime.webse.my.id/',
        baseProtocol: 'https',
        baseDomain: 'dungnime.webse.my.id',
        // baseUrl: 'http://dungnime.test/',
        // baseProtocol: 'http',
        // baseDomain: 'dungnime.test',
        basePort: 80,
        defaultParameters: []
    };

    if (typeof window !== 'undefined' && typeof window.Ziggy !== 'undefined') {
        for (var name in window.Ziggy.namedRoutes) {
            Ziggy.namedRoutes[name] = window.Ziggy.namedRoutes[name];
        }
    }

    export {
        Ziggy
    }
