function find_dup_songs(arra1, arra2) {
    //input: two sets of string ids
    //output: intersection of the two sets of string ids, representing songs users share

    var result = new Set();
    //console.log('1', arra1)
    //console.log('2', arra2)

    var intersect = new Set();
    for(var x of arra1) if(arra2.has(x)) intersect.add(x);

    return intersect;

}

function get_songs(arra1){
    //input: a list of dictionaries, each representing a song. the output of get most popular tracks
    //output: a set of string ids, each representing a song
    var arra1new = arra1["items"]
    var result = new Set();
    arra1new.forEach(function (item) {
        result.add(item['id']);
    })
    return result
}



//console.log(find_duplicate_in_array([1, 2, -2, 4, 5, 4, 7, 8, 7, 7, 71, 3, 6]));

var exData1 = {"items": [
    {
      "album": {
        "album_type": "ALBUM",
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/3Gm5F95VdRxW3mqCn8RPBJ"
            },
            "href": "https://api.spotify.com/v1/artists/3Gm5F95VdRxW3mqCn8RPBJ",
            "id": "3Gm5F95VdRxW3mqCn8RPBJ",
            "name": "Aminé",
            "type": "artist",
            "uri": "spotify:artist:3Gm5F95VdRxW3mqCn8RPBJ"
          }
        ],
        "available_markets": [
          "AD",
        ],
        "external_urls": {
          "spotify": "https://open.spotify.com/album/4mwO9qIVmngSe7yR5Ios0I"
        },
        "href": "https://api.spotify.com/v1/albums/4mwO9qIVmngSe7yR5Ios0I",
        "id": "4mwO9qIVmngSe7yR5Ios0I",
        "images": [
          {
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273a52fb68f00620e45ed7467c5",
            "width": 640
          },
          {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02a52fb68f00620e45ed7467c5",
            "width": 300
          },
          {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851a52fb68f00620e45ed7467c5",
            "width": 64
          }
        ],
        "name": "ONEPOINTFIVE",
        "release_date": "2018-08-15",
        "release_date_precision": "day",
        "total_tracks": 13,
        "type": "album",
        "uri": "spotify:album:4mwO9qIVmngSe7yR5Ios0I"
      },
      //album ends here
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/3Gm5F95VdRxW3mqCn8RPBJ"
          },
          "href": "https://api.spotify.com/v1/artists/3Gm5F95VdRxW3mqCn8RPBJ",
          "id": "3Gm5F95VdRxW3mqCn8RPBJ",
          "name": "Aminé",
          "type": "artist",
          "uri":
          "spotify:artist:3Gm5F95VdRxW3mqCn8RPBJ"
        }
      ], //artist ends here
      "available_markets": [
        "AD",
      ],
      "disc_number": 1,
      "duration_ms": 157306,
      "explicit": true,
      "external_ids": {
        "isrc": "USUM71811873"
      },
      "external_urls": {
        "spotify": "https://open.spotify.com/track/3OzwuqlBU5IInWGKhIDhTq"
      },
      "href": "https://api.spotify.com/v1/tracks/3OzwuqlBU5IInWGKhIDhTq",
      "id": "3OzwuqlBU5IInWGKhIDhTq",
      "is_local": false,
      "name": "CANTU",
      "popularity": 55,
      "preview_url": "https://p.scdn.co/mp3-preview/a15a6c22e2cffff76bafb7d6f62536b369df00b4?cid=774b29d4f13844c495f206cafdad9c86",
      "track_number": 9,
      "type": "track",
      "uri": "spotify:track:3OzwuqlBU5IInWGKhIDhTq"
    },
    {
        "album": {
          "album_type": "ALBUM",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/1tqhsYv8yBBdwANFNzHtcr"
              },
              "href": "https://api.spotify.com/v1/artists/1tqhsYv8yBBdwANFNzHtcr",
              "id": "1tqhsYv8yBBdwANFNzHtcr",
              "name": "Lil Dicky",
              "type": "artist",
              "uri": "spotify:artist:1tqhsYv8yBBdwANFNzHtcr"
            }
          ],
          "available_markets": [
            "AD",
            "AE",
            "AR",
            "AT",
            "AU",
            "BE",
            "BG",
            "BH",
            "BO",
            "BR",
            "CA",
            "CH",
            "CL",
            "CO",
            "CR",
            "CY",
            "CZ",
            "DE",
            "DK",
            "DO",
            "DZ",
            "EC",
            "EE",
            "EG",
            "ES",
            "FI",
            "FR",
            "GB",
            "GR",
            "GT",
            "HK",
            "HN",
            "HU",
            "ID",
            "IE",
            "IL",
            "IS",
            "IT",
            "JO",
            "JP",
            "KW",
            "LB",
            "LI",
            "LT",
            "LU",
            "LV",
            "MA",
            "MC",
            "MT",
            "MX",
            "MY",
            "NI",
            "NL",
            "NO",
            "NZ",
            "OM",
            "PA",
            "PE",
            "PH",
            "PL",
            "PS",
            "PT",
            "PY",
            "QA",
            "RO",
            "SA",
            "SE",
            "SG",
            "SK",
            "SV",
            "TH",
            "TN",
            "TR",
            "TW",
            "US",
            "UY",
            "VN",
            "ZA"
          ],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/5eLVoIPq7P3Bu29lVgD4x0"
          },
          "href": "https://api.spotify.com/v1/albums/5eLVoIPq7P3Bu29lVgD4x0",
          "id": "5eLVoIPq7P3Bu29lVgD4x0",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2734598988646356555fd93a33d",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e024598988646356555fd93a33d",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048514598988646356555fd93a33d",
              "width": 64
            }
          ],
          "name": "Professional Rapper",
          "release_date": "2015-07-31",
          "release_date_precision": "day",
          "total_tracks": 20,
          "type": "album",
          "uri": "spotify:album:5eLVoIPq7P3Bu29lVgD4x0"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/1tqhsYv8yBBdwANFNzHtcr"
            },
            "href": "https://api.spotify.com/v1/artists/1tqhsYv8yBBdwANFNzHtcr",
            "id": "1tqhsYv8yBBdwANFNzHtcr",
            "name": "Lil Dicky",
            "type": "artist",
            "uri": "spotify:artist:1tqhsYv8yBBdwANFNzHtcr"
          }
        ],
        "available_markets": [
          "AD",
          "AE",
          "AR",
          "AT",
          "AU",
          "BE",
          "BG",
          "BH",
          "BO",
          "BR",
          "CA",
          "CH",
          "CL",
          "CO",
          "CR",
          "CY",
          "CZ",
          "DE",
          "DK",
          "DO",
          "DZ",
          "EC",
          "EE",
          "EG",
          "ES",
          "FI",
          "FR",
          "GB",
          "GR",
          "GT",
          "HK",
          "HN",
          "HU",
          "ID",
          "IE",
          "IL",
          "IS",
          "IT",
          "JO",
          "JP",
          "KW",
          "LB",
          "LI",
          "LT",
          "LU",
          "LV",
          "MA",
          "MC",
          "MT",
          "MX",
          "MY",
          "NI",
          "NL",
          "NO",
          "NZ",
          "OM",
          "PA",
          "PE",
          "PH",
          "PL",
          "PS",
          "PT",
          "PY",
          "QA",
          "RO",
          "SA",
          "SE",
          "SG",
          "SK",
          "SV",
          "TH",
          "TN",
          "TR",
          "TW",
          "US",
          "UY",
          "VN",
          "ZA"
        ],
        "disc_number": 1,
        "duration_ms": 285894,
        "explicit": true,
        "external_ids": {
          "isrc": "QM4HH1550004"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/0egGmGkZ8maYdEYo4RrVsZ"
        },
        "href": "https://api.spotify.com/v1/tracks/0egGmGkZ8maYdEYo4RrVsZ",
        "id": "0egGmGkZ8maYdEYo4RrVsZ",
        "is_local": false,
        "name": "Lemme Freak",
        "popularity": 65,
        "preview_url": "https://p.scdn.co/mp3-preview/1ba11f33e22208e30148c4be67895ef5f13ae7a1?cid=774b29d4f13844c495f206cafdad9c86",
        "track_number": 4,
        "type": "track",
        "uri": "spotify:track:0egGmGkZ8maYdEYo4RrVsZ"
      },
      {
        "album": {
          "album_type": "ALBUM",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/5XenQ7XfcvQdfIbpLEFaKQ"
              },
              "href": "https://api.spotify.com/v1/artists/5XenQ7XfcvQdfIbpLEFaKQ",
              "id": "5XenQ7XfcvQdfIbpLEFaKQ",
              "name": "GoldLink",
              "type": "artist",
              "uri": "spotify:artist:5XenQ7XfcvQdfIbpLEFaKQ"
            }
          ],
          "available_markets": [
            "AD",
            "AE",
            "AR",
            "AT",
            "AU",
            "BE",
            "BG",
            "BH",
            "BO",
            "BR",
            "CA",
            "CH",
            "CL",
            "CO",
            "CR",
            "CY",
            "CZ",
            "DE",
            "DK",
            "DO",
            "DZ",
            "EC",
            "EE",
            "EG",
            "ES",
            "FI",
            "FR",
            "GB",
            "GR",
            "GT",
            "HK",
            "HN",
            "HU",
            "ID",
            "IE",
            "IL",
            "IN",
            "IS",
            "IT",
            "JO",
            "JP",
            "KW",
            "LB",
            "LI",
            "LT",
            "LU",
            "LV",
            "MA",
            "MC",
            "MT",
            "MX",
            "MY",
            "NI",
            "NL",
            "NO",
            "NZ",
            "OM",
            "PA",
            "PE",
            "PH",
            "PL",
            "PS",
            "PT",
            "PY",
            "QA",
            "RO",
            "SA",
            "SE",
            "SG",
            "SK",
            "SV",
            "TH",
            "TN",
            "TR",
            "TW",
            "US",
            "UY",
            "VN",
            "ZA"
          ],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/790qROmQ1y4aPEYLcSkScH"
          },
          "href": "https://api.spotify.com/v1/albums/790qROmQ1y4aPEYLcSkScH",
          "id": "790qROmQ1y4aPEYLcSkScH",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273aa6c97d95ec2a00ef41c6b31",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02aa6c97d95ec2a00ef41c6b31",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851aa6c97d95ec2a00ef41c6b31",
              "width": 64
            }
          ],
          "name": "Diaspora",
          "release_date": "2019-06-12",
          "release_date_precision": "day",
          "total_tracks": 14,
          "type": "album",
          "uri": "spotify:album:790qROmQ1y4aPEYLcSkScH"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/5XenQ7XfcvQdfIbpLEFaKQ"
            },
            "href": "https://api.spotify.com/v1/artists/5XenQ7XfcvQdfIbpLEFaKQ",
            "id": "5XenQ7XfcvQdfIbpLEFaKQ",
            "name": "GoldLink",
            "type": "artist",
            "uri": "spotify:artist:5XenQ7XfcvQdfIbpLEFaKQ"
          }
        ],
        "available_markets": [
          "AD",
          "AE",
          "AR",
          "AT",
          "AU",
          "BE",
          "BG",
          "BH",
          "BO",
          "BR",
          "CA",
          "CH",
          "CL",
          "CO",
          "CR",
          "CY",
          "CZ",
          "DE",
          "DK",
          "DO",
          "DZ",
          "EC",
          "EE",
          "EG",
          "ES",
          "FI",
          "FR",
          "GB",
          "GR",
          "GT",
          "HK",
          "HN",
          "HU",
          "ID",
          "IE",
          "IL",
          "IN",
          "IS",
          "IT",
          "JO",
          "JP",
          "KW",
          "LB",
          "LI",
          "LT",
          "LU",
          "LV",
          "MA",
          "MC",
          "MT",
          "MX",
          "MY",
          "NI",
          "NL",
          "NO",
          "NZ",
          "OM",
          "PA",
          "PE",
          "PH",
          "PL",
          "PS",
          "PT",
          "PY",
          "QA",
          "RO",
          "SA",
          "SE",
          "SG",
          "SK",
          "SV",
          "TH",
          "TN",
          "TR",
          "TW",
          "US",
          "UY",
          "VN",
          "ZA"
        ],
        "disc_number": 1,
        "duration_ms": 189613,
        "explicit": true,
        "external_ids": {
          "isrc": "USRC11901678"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/5uNhWDGP1gXxS2IZl2alGx"
        },
        "href": "https://api.spotify.com/v1/tracks/5uNhWDGP1gXxS2IZl2alGx",
        "id": "5uNhWDGP1gXxS2IZl2alGx",
        "is_local": false,
        "name": "Maniac",
        "popularity": 61,
        "preview_url": "https://p.scdn.co/mp3-preview/7807c5ad3c186fed18c0e745825649509c13360a?cid=774b29d4f13844c495f206cafdad9c86",
        "track_number": 3,
        "type": "track",
        "uri": "spotify:track:5uNhWDGP1gXxS2IZl2alGx"
      },
      {
        "album": {
          "album_type": "SINGLE",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/4GvEc3ANtPPjt1ZJllr5Zl"
              },
              "href": "https://api.spotify.com/v1/artists/4GvEc3ANtPPjt1ZJllr5Zl",
              "id": "4GvEc3ANtPPjt1ZJllr5Zl",
              "name": "Bazzi",
              "type": "artist",
              "uri": "spotify:artist:4GvEc3ANtPPjt1ZJllr5Zl"
            }
          ],
          "available_markets": [
            "AD",
            "AE",
            "AR",
            "AT",
            "AU",
            "BE",
            "BG",
            "BH",
            "BO",
            "BR",
            "CA",
            "CH",
            "CL",
            "CO",
            "CR",
            "CY",
            "CZ",
            "DE",
            "DK",
            "DO",
            "DZ",
            "EC",
            "EE",
            "EG",
            "ES",
            "FI",
            "FR",
            "GB",
            "GR",
            "GT",
            "HK",
            "HN",
            "HU",
            "ID",
            "IE",
            "IL",
            "IS",
            "IT",
            "JO",
            "JP",
            "KW",
            "LB",
            "LI",
            "LT",
            "LU",
            "LV",
            "MA",
            "MC",
            "MT",
            "MX",
            "MY",
            "NI",
            "NL",
            "NO",
            "NZ",
            "OM",
            "PA",
            "PE",
            "PH",
            "PL",
            "PS",
            "PT",
            "PY",
            "QA",
            "RO",
            "SA",
            "SE",
            "SG",
            "SK",
            "SV",
            "TH",
            "TN",
            "TR",
            "TW",
            "US",
            "UY",
            "VN",
            "ZA"
          ],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/77xZ13mQazjlNBhKomT5Xr"
          },
          "href": "https://api.spotify.com/v1/albums/77xZ13mQazjlNBhKomT5Xr",
          "id": "77xZ13mQazjlNBhKomT5Xr",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273871f9723f54a67f5b92627d7",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02871f9723f54a67f5b92627d7",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851871f9723f54a67f5b92627d7",
              "width": 64
            }
          ],
          "name": "Caught In The Fire",
          "release_date": "2019-04-01",
          "release_date_precision": "day",
          "total_tracks": 1,
          "type": "album",
          "uri": "spotify:album:77xZ13mQazjlNBhKomT5Xr"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/4GvEc3ANtPPjt1ZJllr5Zl"
            },
            "href": "https://api.spotify.com/v1/artists/4GvEc3ANtPPjt1ZJllr5Zl",
            "id": "4GvEc3ANtPPjt1ZJllr5Zl",
            "name": "Bazzi",
            "type": "artist",
            "uri": "spotify:artist:4GvEc3ANtPPjt1ZJllr5Zl"
          }
        ],
        "available_markets": [
          "AD",
          "AE",
          "AR",
          "AT",
          "AU",
          "BE",
          "BG",
          "BH",
          "BO",
          "BR",
          "CA",
          "CH",
          "CL",
          "CO",
          "CR",
          "CY",
          "CZ",
          "DE",
          "DK",
          "DO",
          "DZ",
          "EC",
          "EE",
          "EG",
          "ES",
          "FI",
          "FR",
          "GB",
          "GR",
          "GT",
          "HK",
          "HN",
          "HU",
          "ID",
          "IE",
          "IL",
          "IS",
          "IT",
          "JO",
          "JP",
          "KW",
          "LB",
          "LI",
          "LT",
          "LU",
          "LV",
          "MA",
          "MC",
          "MT",
          "MX",
          "MY",
          "NI",
          "NL",
          "NO",
          "NZ",
          "OM",
          "PA",
          "PE",
          "PH",
          "PL",
          "PS",
          "PT",
          "PY",
          "QA",
          "RO",
          "SA",
          "SE",
          "SG",
          "SK",
          "SV",
          "TH",
          "TN",
          "TR",
          "TW",
          "US",
          "UY",
          "VN",
          "ZA"
        ],
        "disc_number": 1,
        "duration_ms": 169090,
        "explicit": true,
        "external_ids": {
          "isrc": "USAT21901898"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/29lG0RlQXa6Fms3DXs1TIT"
        },
        "href": "https://api.spotify.com/v1/tracks/29lG0RlQXa6Fms3DXs1TIT",
        "id": "29lG0RlQXa6Fms3DXs1TIT",
        "is_local": false,
        "name": "Caught In The Fire",
        "popularity": 68,
        "preview_url": "https://p.scdn.co/mp3-preview/d8b5797e42ff2100dfb2667300c81153749df5ed?cid=774b29d4f13844c495f206cafdad9c86",
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:29lG0RlQXa6Fms3DXs1TIT"
      }
]
}



var exData2 = {"items": [
    {
      "album": {
        "album_type": "ALBUM",
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/3Gm5F95VdRxW3mqCn8RPBJ"
            },
            "href": "https://api.spotify.com/v1/artists/3Gm5F95VdRxW3mqCn8RPBJ",
            "id": "3Gm5F95VdRxW3mqCn8RPBJ",
            "name": "Aminé",
            "type": "artist",
            "uri": "spotify:artist:3Gm5F95VdRxW3mqCn8RPBJ"
          }
        ],
        "available_markets": [
          "AD",
        ],
        "external_urls": {
          "spotify": "https://open.spotify.com/album/4mwO9qIVmngSe7yR5Ios0I"
        },
        "href": "https://api.spotify.com/v1/albums/4mwO9qIVmngSe7yR5Ios0I",
        "id": "4mwO9qIVmngSe7yR5Ios0I",
        "images": [
          {
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273a52fb68f00620e45ed7467c5",
            "width": 640
          },
          {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02a52fb68f00620e45ed7467c5",
            "width": 300
          },
          {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851a52fb68f00620e45ed7467c5",
            "width": 64
          }
        ],
        "name": "ONEPOINTFIVE",
        "release_date": "2018-08-15",
        "release_date_precision": "day",
        "total_tracks": 13,
        "type": "album",
        "uri": "spotify:album:4mwO9qIVmngSe7yR5Ios0I"
      },
      //album ends here
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/3Gm5F95VdRxW3mqCn8RPBJ"
          },
          "href": "https://api.spotify.com/v1/artists/3Gm5F95VdRxW3mqCn8RPBJ",
          "id": "3Gm5F95VdRxW3mqCn8RPBJ",
          "name": "Aminé",
          "type": "artist",
          "uri":
          "spotify:artist:3Gm5F95VdRxW3mqCn8RPBJ"
        }
      ], //artist ends here
      "available_markets": [
        "AD",
      ],
      "disc_number": 1,
      "duration_ms": 157306,
      "explicit": true,
      "external_ids": {
        "isrc": "USUM71811873"
      },
      "external_urls": {
        "spotify": "https://open.spotify.com/track/3OzwuqlBU5IInWGKhIDhTq"
      },
      "href": "https://api.spotify.com/v1/tracks/3OzwuqlBU5IInWGKhIDhTq",
      "id": "3OzwuqlBU5IInWGKhIDhTq",
      "is_local": false,
      "name": "CANTU",
      "popularity": 55,
      "preview_url": "https://p.scdn.co/mp3-preview/a15a6c22e2cffff76bafb7d6f62536b369df00b4?cid=774b29d4f13844c495f206cafdad9c86",
      "track_number": 9,
      "type": "track",
      "uri": "spotify:track:3OzwuqlBU5IInWGKhIDhTq"
    },
    {
        "album": {
          "album_type": "ALBUM",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/1tqhsYv8yBBdwANFNzHtcr"
              },
              "href": "https://api.spotify.com/v1/artists/1tqhsYv8yBBdwANFNzHtcr",
              "id": "1tqhsYv8yBBdwANFNzHtcr",
              "name": "Lil Dicky",
              "type": "artist",
              "uri": "spotify:artist:1tqhsYv8yBBdwANFNzHtcr"
            }
          ],
          "available_markets": [
            "AD",
            "AE",
            "AR",
            "AT",
            "AU",
            "BE",
            "BG",
            "BH",
            "BO",
            "BR",
            "CA",
            "CH",
            "CL",
            "CO",
            "CR",
            "CY",
            "CZ",
            "DE",
            "DK",
            "DO",
            "DZ",
            "EC",
            "EE",
            "EG",
            "ES",
            "FI",
            "FR",
            "GB",
            "GR",
            "GT",
            "HK",
            "HN",
            "HU",
            "ID",
            "IE",
            "IL",
            "IS",
            "IT",
            "JO",
            "JP",
            "KW",
            "LB",
            "LI",
            "LT",
            "LU",
            "LV",
            "MA",
            "MC",
            "MT",
            "MX",
            "MY",
            "NI",
            "NL",
            "NO",
            "NZ",
            "OM",
            "PA",
            "PE",
            "PH",
            "PL",
            "PS",
            "PT",
            "PY",
            "QA",
            "RO",
            "SA",
            "SE",
            "SG",
            "SK",
            "SV",
            "TH",
            "TN",
            "TR",
            "TW",
            "US",
            "UY",
            "VN",
            "ZA"
          ],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/5eLVoIPq7P3Bu29lVgD4x0"
          },
          "href": "https://api.spotify.com/v1/albums/5eLVoIPq7P3Bu29lVgD4x0",
          "id": "5eLVoIPq7P3Bu29lVgD4x0",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2734598988646356555fd93a33d",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e024598988646356555fd93a33d",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048514598988646356555fd93a33d",
              "width": 64
            }
          ],
          "name": "Professional Rapper",
          "release_date": "2015-07-31",
          "release_date_precision": "day",
          "total_tracks": 20,
          "type": "album",
          "uri": "spotify:album:5eLVoIPq7P3Bu29lVgD4x0"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/1tqhsYv8yBBdwANFNzHtcr"
            },
            "href": "https://api.spotify.com/v1/artists/1tqhsYv8yBBdwANFNzHtcr",
            "id": "1tqhsYv8yBBdwANFNzHtcr",
            "name": "Lil Dicky",
            "type": "artist",
            "uri": "spotify:artist:1tqhsYv8yBBdwANFNzHtcr"
          }
        ],
        "available_markets": [
          "AD",
          "AE",
          "AR",
          "AT",
          "AU",
          "BE",
          "BG",
          "BH",
          "BO",
          "BR",
          "CA",
          "CH",
          "CL",
          "CO",
          "CR",
          "CY",
          "CZ",
          "DE",
          "DK",
          "DO",
          "DZ",
          "EC",
          "EE",
          "EG",
          "ES",
          "FI",
          "FR",
          "GB",
          "GR",
          "GT",
          "HK",
          "HN",
          "HU",
          "ID",
          "IE",
          "IL",
          "IS",
          "IT",
          "JO",
          "JP",
          "KW",
          "LB",
          "LI",
          "LT",
          "LU",
          "LV",
          "MA",
          "MC",
          "MT",
          "MX",
          "MY",
          "NI",
          "NL",
          "NO",
          "NZ",
          "OM",
          "PA",
          "PE",
          "PH",
          "PL",
          "PS",
          "PT",
          "PY",
          "QA",
          "RO",
          "SA",
          "SE",
          "SG",
          "SK",
          "SV",
          "TH",
          "TN",
          "TR",
          "TW",
          "US",
          "UY",
          "VN",
          "ZA"
        ],
        "disc_number": 1,
        "duration_ms": 285894,
        "explicit": true,
        "external_ids": {
          "isrc": "QM4HH1550004"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/0egGmGkZ8maYdEYo4RrVsZ"
        },
        "href": "https://api.spotify.com/v1/tracks/0egGmGkZ8maYdEYo4RrVsZ",
        "id": "0egGmGkZ8maYdEYo4RrVsZ",
        "is_local": false,
        "name": "Lemme Freak",
        "popularity": 65,
        "preview_url": "https://p.scdn.co/mp3-preview/1ba11f33e22208e30148c4be67895ef5f13ae7a1?cid=774b29d4f13844c495f206cafdad9c86",
        "track_number": 4,
        "type": "track",
        "uri": "spotify:track:0egGmGkZ8maYdEYo4RrVsZ"
      }
    ]


}


//create array of same song ids
var output = find_dup_songs(get_songs(exData1), get_songs(exData2));
var songId = [];
function addId(value1){
  songId.push(value1);
}
output.forEach(addId); 


//create array of indexes within exData1 of the common tracks
arrayIndex = [];
songId.forEach(findSongs);

function findSongs(value1){
  var i;
  for(i = 0; i < exData1["items"].length; i++){
    if (exData1["items"][i]["id"] == value1){
      arrayIndex.push(i);
    }
  }
}

//create array of arrays representing each song in common
var infoArray = [];
arrayIndex.forEach(saveInfo);
//array in form of [id, song title, song artist]
function saveInfo(value1){
  var song = exData1["items"][value1];
  var data = [song["id"], song["name"], song["album"]["artists"][0]["name"]];
  infoArray.push(data);
}

//print out song info in formatted ways
var formattedInfo = "";
for(i = 0; i < infoArray.length; i++){
  formattedInfo += "Title: " + infoArray[i][1] + "\nArtist: " + infoArray[i][2] + "\n\n";
}
console.log(formattedInfo);

//GET https://api.spotify.com/v1/tracks/3OzwuqlBU5IInWGKhIDhTq
