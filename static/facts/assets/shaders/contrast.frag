{
  "sksl": "// This SkSL shader is autogenerated by spirv-cross.\n\nfloat4 flutter_FragCoord;\n\nuniform vec2 u_resolution;\nuniform float contrast;\nuniform shader u_tex0;\nuniform half2 u_tex0_size;\n\nvec4 fragColor;\n\nmat3 sRGB2XYZ;\nmat3 XYZ2sRGB;\nmat3 ROMM2XYZ;\nmat3 XYZ2ROMM;\n\nvec2 FLT_flutter_local_FlutterFragCoord()\n{\n    return flutter_FragCoord.xy;\n}\n\nfloat FLT_flutter_local_BlendOverlayf(float base, float blend)\n{\n    float _92;\n    if (base < 0.5)\n    {\n        _92 = (2.0 * base) * blend;\n    }\n    else\n    {\n        _92 = 1.0 - ((2.0 * (1.0 - base)) * (1.0 - blend));\n    }\n    return _92;\n}\n\nvec3 FLT_flutter_local_BlendOverlay(vec3 base, vec3 blend)\n{\n    float param = base.x;\n    float param_1 = blend.x;\n    float param_2 = base.y;\n    float param_3 = blend.y;\n    float param_4 = base.z;\n    float param_5 = blend.z;\n    return vec3(FLT_flutter_local_BlendOverlayf(param, param_1), FLT_flutter_local_BlendOverlayf(param_2, param_3), FLT_flutter_local_BlendOverlayf(param_4, param_5));\n}\n\nvoid FLT_main()\n{\n    sRGB2XYZ = mat3(vec3(0.4360747039318084716796875, 0.385064899921417236328125, 0.14308039844036102294921875), vec3(0.22250449657440185546875, 0.716878592967987060546875, 0.0606168992817401885986328125), vec3(0.01393220014870166778564453125, 0.097104497253894805908203125, 0.71417331695556640625));\n    XYZ2sRGB = mat3(vec3(3.1338560581207275390625, -1.61686670780181884765625, -0.490614593029022216796875), vec3(-0.978768408298492431640625, 1.916141510009765625, 0.033454000949859619140625), vec3(0.071945302188396453857421875, -0.22899140417575836181640625, 1.4052426815032958984375));\n    ROMM2XYZ = mat3(vec3(0.7976748943328857421875, 0.13519169390201568603515625, 0.03135339915752410888671875), vec3(0.2880401909351348876953125, 0.71187412738800048828125, 8.5699997725896537303924560546875e-05), vec3(0.0, 0.0, 0.82520997524261474609375));\n    XYZ2ROMM = mat3(vec3(1.34594333171844482421875, -0.25560748577117919921875, -0.0511117987334728240966796875), vec3(-0.544598877429962158203125, 1.508167266845703125, 0.0205351002514362335205078125), vec3(0.0, 0.0, 1.21181285381317138671875));\n    vec2 fragCoord = FLT_flutter_local_FlutterFragCoord();\n    vec2 st = FLT_flutter_local_FlutterFragCoord() / u_resolution;\n    vec4 color = u_tex0.eval(u_tex0_size *  st);\n    float amount = contrast;\n    vec3 base_1 = (color.xyz * sRGB2XYZ) * XYZ2ROMM;\n    vec3 overlay = mix(vec3(0.0), base_1, vec3(amount * color.w));\n    vec3 param_6 = base_1;\n    vec3 param_7 = overlay;\n    vec3 res = (FLT_flutter_local_BlendOverlay(param_6, param_7) * ROMM2XYZ) * XYZ2sRGB;\n    fragColor = vec4(res, color.w);\n}\n\nhalf4 main(float2 iFragCoord)\n{\n      flutter_FragCoord = float4(iFragCoord, 0, 0);\n      FLT_main();\n      return fragColor;\n}\n",
  "stage": 1,
  "target_platform": 2,
  "uniforms": [
    {
      "array_elements": 0,
      "bit_width": 32,
      "columns": 1,
      "location": 0,
      "name": "u_resolution",
      "rows": 2,
      "type": 10
    },
    {
      "array_elements": 0,
      "bit_width": 0,
      "columns": 1,
      "location": 1,
      "name": "u_tex0",
      "rows": 1,
      "type": 12
    },
    {
      "array_elements": 0,
      "bit_width": 32,
      "columns": 1,
      "location": 2,
      "name": "contrast",
      "rows": 1,
      "type": 10
    }
  ]
}